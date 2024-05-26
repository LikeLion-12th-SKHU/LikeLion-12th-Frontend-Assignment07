import { useState } from "react";

// 초기 값을 받아 상태를 관리
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  // input의 값이 변경될 때 호출되는 함수
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

export default useInput;
