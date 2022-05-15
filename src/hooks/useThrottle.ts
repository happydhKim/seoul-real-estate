import {useCallback, useRef, useEffect} from 'react';

function useThrottle<T extends Function>(callback: T, threshold: number) {
  const wait = useRef<boolean>(false);
  // TODO : type any
  const timeout = useRef<any>(-1);

  useEffect(() => () => clearTimeout(timeout.current), []);

  // TODO : type any
  return useCallback((...args: any) => {
    if (!wait.current) {
      callback(...args);
      wait.current = true;
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        wait.current = false;
      }, threshold);
    }
  }, [callback, threshold]);
}

export default useThrottle;
