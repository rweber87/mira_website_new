import { useEffect, useState, useRef } from 'react';

function useIsElementNearCenter(range = 125) {
  const [isInCenter, setIsInCenter] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const viewportHeight = window.innerHeight;
      const elementRect = elementRef.current.getBoundingClientRect();
      const elementCenter = elementRect.top + elementRect.height / 2;
      const viewportCenter = viewportHeight / 2;

      setIsInCenter(Math.abs(elementCenter - viewportCenter) <= range);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [range]);

  return [isInCenter, elementRef];
}

export default useIsElementNearCenter;
