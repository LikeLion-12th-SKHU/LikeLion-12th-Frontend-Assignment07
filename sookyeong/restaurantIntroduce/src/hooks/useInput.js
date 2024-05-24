import { useState } from "react";

// useInput 커스텀 훅 정의
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue); // value 상태와 그 값을 변경하는 setValue 함수를 선언하고 초기값은 초기값으로 초기화

  // 입력 값이 변경될 때 실행할 onChange 함수 정의
  const onChange = (e) => {
    setValue(e.target.value); // 입력 값이 변경될 때마다 그 값을 value 상태에 설정
  };

  return {
    value, // 현재 입력 값
    onChange, // 입력 값이 변경될 때 실행할 함수
  };
};

export default useInput; // useInput 훅 내보내기
