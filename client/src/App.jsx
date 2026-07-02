import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// ScrollToTop: scrolls window to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
