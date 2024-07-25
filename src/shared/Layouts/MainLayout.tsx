import { Header } from '@UI/index';

export default function MainLayout({ children }): JSX.Element {
  return (
    <nav>
      <Header children={children} />
    </nav>
  );
}
