import { useEffect } from 'react';

export const usePushView = (name: string) => {
  useEffect(() => {
    fetch(`/api/views/${name}`, {
      method: 'POST',
    });
  }, [name]);
};
