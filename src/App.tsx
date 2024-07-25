import { Outlet } from 'react-router-dom';
import MainLayout from './shared/Layouts/MainLayout';
import Footer from './modules/Home/_Componets/Footer';

const App = (): React.ReactElement => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer />
    </>
  );
};

export default App;
