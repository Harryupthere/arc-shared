import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ShadeImage } from '../common/iconImage';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
       <picture className="bottom-left roated-90">
        <ShadeImage />
      </picture>
      <picture className="bottom-right" >
        <ShadeImage />
      </picture>
    </div>
  );
};

export default Layout;