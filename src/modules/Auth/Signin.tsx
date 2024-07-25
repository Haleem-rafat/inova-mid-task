import SignInForm from './_Components/SignInForm';
import { AuthLayout } from './_Layout/AuthLayout';

const SignIn: React.FC = () => {
  return (
    <AuthLayout.Container>
      <div className="mx-auto max-w-[353px]">
        <AuthLayout.Header>
          <div className="mx-auto flex flex-col gap-y-3 pb-[38px] text-center text-2xl font-bold text-white">
            <h1>SIGN IN</h1>
            <h4>Welcome back,</h4>
          </div>
        </AuthLayout.Header>
        <AuthLayout.Content>
          <SignInForm key="sign_in_from" />
        </AuthLayout.Content>
      </div>
    </AuthLayout.Container>
  );
};

export default SignIn;
