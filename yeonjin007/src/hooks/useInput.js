//검색기능을 위해 만듬
//input 태그와 useInput 커스텀 훅을 사용하여 사용자가 검색어에 따라 맞는 맛집을 찾아 표시할 수 있게 함
//useInput 훅은 입력값을 쉽게 관리할 수 있도록 하는 것
import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
}

export default useInput;
