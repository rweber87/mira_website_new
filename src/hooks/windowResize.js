import { useEffect } from 'react';

const useWindowSize = (callback) => {
  useEffect(() => {
    const handleResize = () => {
      callback({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);
};

export default useWindowSize;
