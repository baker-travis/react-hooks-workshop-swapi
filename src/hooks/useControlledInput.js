import { useState, useCallback } from 'react';

export default function useControlledInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return [value, onChange];
}
