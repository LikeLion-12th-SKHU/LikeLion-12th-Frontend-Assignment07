import { useState } from "react";

const useInput = (initialState, prevConditionCallback) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    if (prevConditionCallback && !prevConditionCallback(e)) {
      setError(true);
    } else {
      setError(false);
    }
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
    error,
    setValue,
  };
};

export default useInput;
