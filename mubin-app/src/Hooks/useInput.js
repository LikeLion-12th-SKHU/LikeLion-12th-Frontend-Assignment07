import { useState } from "react";

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    // input 값 변경
    setValue(e.target.value);
  };

  return {
    value,
    onChange, // input 값 변경 함수
  };
};

export default useInput;
