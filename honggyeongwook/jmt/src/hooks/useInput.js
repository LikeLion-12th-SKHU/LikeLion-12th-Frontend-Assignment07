import { useState } from "react";

const useInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useInput;
