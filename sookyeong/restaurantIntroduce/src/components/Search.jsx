import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput"; // useInput 훅 import

// // 스타일드 컴포넌트를 사용하여 StyledInput 스타일 정의
const StyledInput = styled.div`
  display: flex; /* 요소들을 행으로 배치 */
  margin: 1rem 1rem; /* 위아래 외부 여백 1rem, 좌우 외부 여백 1rem */
  justify-content: center; /* 내부 요소들을 가운데 정렬 */

  input {
    margin: 10px; /* 내부 여백 */
    padding: 10px; /* 텍스트와 테두리 사이 여백 */
    width: 30%; /* 너비 */
    border: 4px solid green; /* 테두리 스타일 */
  }

  button {
    color: white; /* 글자색 */
    background-color: green; /* 배경색 */
    margin: 10px; /* 외부 여백 */
    padding: 10px; /* 내부 여백 */
    border: 4px solid green; /* 테두리 스타일 */
    cursor: pointer; /* 커서 타입 */
  }
`;

// 검색 기능이 있는 Search 컴포넌트 정의
const Search = ({ value, onChange, onSearch }) => {
  // 검색 기능이 있는 handleSearch 함수 정의
  const handleSearch = () => {
    // onSearch 함수 호출
    onSearch(); 
  };

  return (
    <StyledInput>
      {/* StyledInpu 서식 적용 */}
      {/* 식당 이름을 입력하라는 메세지가 default값인 입력란 */}
      <input
        type="text"
        placeholder="식당 이름을 입력해주세요." 
        value={value} 
        onChange={onChange} 
      />
      {/* 클릭 시 handleSearch 호출하는 버튼 */}
      <button onClick={handleSearch}>검색</button>
    </StyledInput>
  );
};

// Search 컴포넌트 내보내기
export default Search;
