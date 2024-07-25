import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router-dom';
import picture from '@/assets/img/main-logo.svg';

interface IAuthLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}
interface IContainerProps {
  children?: string | JSX.Element | JSX.Element[];
}

export default function Container({ children }: IContainerProps): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="bg-surface-background scrollbar-hide flex h-screen w-screen flex-row gap-3">
      <div className="bg-primary-400 relative w-[33.2rem] overflow-hidden max-lg:hidden">
        <img
          className="h-full w-full object-cover"
          src="http://bigramyweb.inovaeg.com/static/media/login.c862d8f1db8d18426543.webp"
        />
      </div>
      <div className="scrollbar-hide relative z-20 mx-4 flex w-full overflow-y-scroll md:mx-auto lg:w-1/2">
        <img
          onClick={() => navigate(ROUTES.HOME)}
          className="absolute z-0 mt-10 object-cover"
          src={picture}
        />
        <div className="scrollbar-hide m-auto w-full flex-col items-center justify-center gap-2 overflow-hidden overflow-y-scroll px-4 py-10 md:max-w-xl md:px-16">
          {children}
        </div>
      </div>
    </div>
  );
}

const Header = ({ children }: IAuthLayoutProps) => (
  <div className="flex w-full gap-1 text-center">{children}</div>
);
const Footer = ({ children }: IAuthLayoutProps) => (
  <div className="flex w-full flex-col items-center justify-center gap-1 text-sm">{children}</div>
);
const Content = ({ children }: IAuthLayoutProps) => (
  <div className="scrollbar-hide flex w-full flex-col justify-center gap-4 rounded-lg text-white">
    {children}
  </div>
);
export const AuthLayout = {
  Container,
  Header,
  Footer,
  Content,
};
