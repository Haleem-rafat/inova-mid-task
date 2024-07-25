import * as Yup from 'yup';
import axios from 'axios';
import { envConfig } from '@app/config';
import { ELocalStorageKeys } from '@constants/keys';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';

import { EAPI } from './../../constants/endpoints';

let accessToken = localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN) ?? '';

type TTokensObject = {
  newAccessToken: string;
};
class AuthService {
  private _guestAxios = axios.create({
    baseURL: envConfig.base_url,
  });
  private _decodeToken(token: string): any | null {
    try {
      const decoded = jwtDecode<any>(token);
      return decoded;
    } catch (e) {
      return null;
    }
  }

  /** SETTERS */
  setToken({ newAccessToken }: TTokensObject): void {
    if (!newAccessToken) localStorage.removeItem(ELocalStorageKeys.ACCESS_TOKEN);

    accessToken = newAccessToken;

    localStorage.setItem(ELocalStorageKeys.ACCESS_TOKEN, newAccessToken);
  }

  /** GETTERS */
  async getDecodedToken(): Promise<any | null> {
    const token = await this.getToken();
    if (!token) return null;
    return this._decodeToken(token);
  }

  async getToken(): Promise<string | null> {
    if (!this.hasExpired()) return accessToken;
  }

  async isLoggedIn(): Promise<boolean> {
    const token = await this.getToken();
    return !!token;
  }

  hasExpired(): boolean {
    if (!accessToken) return false;
    const decodedToken = jwtDecode(accessToken);

    if (!decodedToken?.exp) return true;

    const now = moment();
    const expiryDate = moment.unix(decodedToken.exp);

    return expiryDate.isSameOrBefore(now, 'minute');
  }

  /* METHODS */
  public logout(): void {
    this.setToken({ newAccessToken: '' });
    localStorage.removeItem(ELocalStorageKeys.ACCESS_TOKEN);
  }

  // API

  public async SignIn(body) {
    const { data } = await this._guestAxios.post(EAPI.LOGIN, body);

    this.setToken({
      newAccessToken: data.extra_data.access_token,
    });

    return data;
  }

  /* API FIELDS */
  public signinFormFields = [
    {
      name: 'email',
      title: 'Email',
      placeholder: 'Enter your Email',
    },
    {
      name: 'password',
      title: 'Password',
      placeholder: 'Enter your password',
      type: 'password',
    },
  ];

  /* API SCHEMAS */
  public signupFormSchema = Yup.object().shape({
    user_type: Yup.string().trim().required('Account type cannot be empty'),
    first_name: Yup.string().trim().required('First name cannot be empty'),
    last_name: Yup.string().trim().required('Last name cannot be empty'),
    email: Yup.string().trim().required('Email cannot be empty'),
    password: Yup.string().trim().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  public signinFormSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email('Please enter a valid email')
      .required('Email cannot be empty'),
    password: Yup.string().trim().required('Password is required'),
  });
}

export default Object.freeze(new AuthService());
