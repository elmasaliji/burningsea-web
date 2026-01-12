import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately with no smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Backup: Also try direct scrollTo
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
