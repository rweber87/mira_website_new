import { useLocation } from 'react-router';
import Footer from '../Footer';
import Nav from '../Nav';

import './styles.scss';

export default function BaseLayout(props) {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <>
      <Nav />
      <div
        className={`main-wrapper ${
          pathname.includes('portfolio/') ? 'project' : ''
        }`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
