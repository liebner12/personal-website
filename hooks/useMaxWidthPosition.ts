import { useEffect, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';
import { MAX_WIDTH } from 'data';

export const useMaxWidthPosition = () => {
  const [x, setX] = useState(0);
  const isExceeding = useMediaQuery(MAX_WIDTH);

  useEffect(() => {
    const setPosition = () => {
      if (!isExceeding) return;
      const value = (window.innerWidth - MAX_WIDTH) / 2;
      setX(value < 0 ? 0 : value);
    };

    window.addEventListener('resize', setPosition);

    setPosition();

    return () => {
      window.removeEventListener('resize', setPosition);
    };
  }, [isExceeding]);

  return x;
};
