import { envConfig } from '@app/config';
import { EAPI } from '@constants/endpoints';
import { IebookRoot, IebookRootDeatilsRoot } from '@servicesTypes/ebook.types';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import api from '..';

class EbookService {
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

  public async ebooksList(type): Promise<IebookRoot> {
    const { data } = await this._guestAxios.get(
      `${EAPI.EBOOK}?filter[taxons]:${type}&filter[sub_product_type]=book`
    );
    return data;
  }

  public async ebooksDetilsGest(id): Promise<IebookRootDeatilsRoot> {
    const { data } = await this._guestAxios.get(`${EAPI.EBOOK}/${id}`);
    return data;
  }

  public async ebooksDetilsAuth(id): Promise<IebookRootDeatilsRoot> {
    const { data } = await api.get(`${EAPI.EBOOK}/${id}`);
    return data;
  }
}
export default Object.freeze(new EbookService());
