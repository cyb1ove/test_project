import { useCallback, useState } from 'react';

const useToggle = (initial: boolean) => {
  const [value, setValue] = useState(initial);

  const toggle = useCallback((nextValue?: boolean) => {
    if (typeof nextValue === 'boolean') {
      setValue(nextValue);
    } else {
      setValue((currentValue) => !currentValue);
    }
  }, []);

  return [value, toggle] as const;
};

export default useToggle;
