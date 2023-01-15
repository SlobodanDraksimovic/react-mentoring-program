import { useCallback, useEffect } from 'react';

const useEffectWithSignal = (func: Function, deps: Array<any>) => {
  const funcCallback = useCallback(func, deps);

  useEffect(() => {
    const abortController = new AbortController();

    funcCallback(abortController.signal);

    return () => abortController.abort();
  }, [funcCallback]);
};

export default useEffectWithSignal;
