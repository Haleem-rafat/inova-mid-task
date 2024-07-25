import mainLogo from '@assets/img/main-logo.svg';
import { ROUTES } from '@constants/routes';
import classNames from 'classnames';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import authService from '@app/api/service/auth.service';
import { Button } from '..';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shadecn/components/ui/dropdown-menu';

export default function Header({ children }): JSX.Element {
  const { isLoggedIn } = useLoaderData() as { isLoggedIn: boolean };

  const navigate = useNavigate();
  const navItems = [
    { label: 'Home', link: ROUTES.HOME },
    { label: 'Courses', link: ROUTES.COURSE },
    { label: 'E-books', link: ROUTES.EBOOK },
    { label: 'Contact us', link: ROUTES.COBTACTUS },
  ];

  return (
    <div>
      <nav className="z-50 h-auto w-full bg-backGround">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between py-2">
            <ReactSVG className="py-8" src={mainLogo} />
            {isLoggedIn ? (
              <div className="rounded bg-white px-5 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger>Hello, you are loged in</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => {
                        authService.logout();
                        location.reload();
                      }}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-x-5 text-white">
                <Button onClick={() => navigate(ROUTES.SIGN_IN)}>Login</Button>
                or
                <Button onClick={() => navigate(ROUTES.SIGN_UP)}>Sign Up</Button>
              </div>
            )}
          </div>
        </div>
        <div className="bg-navGray">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex gap-x-10 py-4">
              {navItems.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.label}
                  className={({ isActive }): string =>
                    classNames(
                      'cursor-pointer font-medium',
                      'hover:text-main',
                      { 'text-main': isActive },
                      { 'text-white': !isActive }
                    )
                  }>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <button type="button" className="flex items-center gap-x-2 text-white">
              <AiOutlineShoppingCart size={30} />
              <p>Cart</p>
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
