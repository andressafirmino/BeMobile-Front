import { useState, useEffect } from 'react';
import { WidthType } from '../protocols';

export default function useWindowsResize() {
  const [windowsResize, setWindowsResize] = useState<WidthType>({ width: undefined });

  useEffect(() => {
    function handleResize() {
      setWindowsResize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowsResize;
}
