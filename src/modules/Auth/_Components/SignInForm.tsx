import MainInput from '@UI/Inputs/MainInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { Button } from '@UI/index';
import authService from '@app/api/service/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import { Form, FormField } from '@/shadecn/components/ui/form';

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const form = useForm({ resolver: yupResolver(authService.signinFormSchema) });

  const handleOnSubmit = (values) => {
    setIsLoading(true);

    const body = {
      device: { uuid: uuidv4(), device_type: 'web', fcm_token: 'ss' },
      user: { username: values?.email, password: values?.password },
    };

    authService
      .SignIn(body)
      .then(() => {
        navigate(ROUTES.HOME);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <div className="flex flex-col gap-4">
            {authService.signinFormFields.map((signinFormField) => (
              <FormField
                key={signinFormField.name}
                control={form.control}
                name={signinFormField.name as 'email' | 'password'}
                render={({ field }) => (
                  <MainInput
                    label={signinFormField.title}
                    placeholder={signinFormField.placeholder}
                    type={signinFormField.type}
                    field={field as any}
                  />
                )}
              />
            ))}
          </div>
          <div className="flex items-center justify-between pb-[26px] pt-4">
            <button
              onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
              type="button"
              className="font-Poppins text-text-dark text-xs">
              Forgot Password?
            </button>
          </div>
          <Button loading={isLoading} type="submit" className="w-full">
            Log in
          </Button>
        </form>
      </Form>
    </div>
  );
}
