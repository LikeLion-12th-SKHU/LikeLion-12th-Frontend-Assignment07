import { useState } from "react";

const useInput = (initialState) => {
  // input 상태 관리
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    // input 값 변경
    setValue(e.target.value); // input 값 업데이트
  };

  return {
    value,
    onChange, // input 값 변경 함수
  };
};

export default useInput;
