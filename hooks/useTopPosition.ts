import { useEffect, useState } from 'react';

// This function is required for handling both `sticky` and `fixed` properties
export const useTopPosition = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const setPosition = () => {
      console.log(window.scrollY, window);
      setTop(0);
    };

    window.addEventListener('scroll', setPosition);

    setPosition();

    return () => {
      window.removeEventListener('scroll', setPosition);
    };
  }, []);

  return 0;
};
