import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageBodyClass = (className) => {
  const location = useLocation();

  useEffect(() => {
    document.body.className = ''; // Clear previous classes
    if (className) {
      document.body.classList.add(className); // Add the new class
    }

    return () => {
      document.body.className = ''; // Cleanup on component unmount
    };
  }, [location, className]);
};

export default usePageBodyClass;