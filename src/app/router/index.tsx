import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import authService from '@app/api/service/auth.service';
import App from '@/App';
import ErrorBoundary from '@/shared/Layouts/ErrorBoundary';
import Home from '@/modules/Home/Home';
import SignIn from '@/modules/Auth/Signin';
import Ebook from '@/modules/Ebook/Ebook';
import ErrorComponent from '@/shared/Layouts/ErrorComponent';
import EbookDeatils from '@/modules/Ebook/_View/EbookDeatils';

type TLoginLoader = Promise<{
  isLoggedIn: boolean;
}>;

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,

    element: <App />,
    loader: async (): TLoginLoader => ({ isLoggedIn: await authService.isLoggedIn() }),
    errorElement: <ErrorBoundary isRoot />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.COURSE, element: <ErrorComponent error="soon" /> },
      {
        path: ROUTES.EBOOK,
        element: <Ebook />,
        loader: async (): TLoginLoader => ({ isLoggedIn: await authService.isLoggedIn() }),
      },
      {
        path: ROUTES.EBOOK_DETAILS,
        element: <EbookDeatils />,
        loader: async (): TLoginLoader => ({ isLoggedIn: await authService.isLoggedIn() }),
      },
      { path: ROUTES.COBTACTUS, element: <ErrorComponent error="soon" /> },
    ],
  },

  {
    path: ROUTES.SIGN_IN,
    element: <SignIn />,
  },
]);
