//검색창을 따로 만들었어용
import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";

const SearchContainer = styled.div`
  width: 800px;
  margin: 20px;
`;
const SearchInput = styled.input`
  padding: 10px;
  width: 50%;
  border: 1px solid #ccc; /* 테두리 추가 */
  border-radius: 8px; /* 테두리 모서리 둥글게 */
`;
// 함수형으로 Search 컴포넌트 정의
function Search({ searchRestaurants }) {
  const [value: query, onChange: setQuery] = useInput("");

  // 검색어를 입력할 때마다 실행되는 함수
  const handleChange = (event) => {
    //입력된 검색어를 setQuery에 설정한다
    setQuery(event.target.value);
    //검색어를 전달한다
    searchRestaurants(event.target.value);
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="가게 이름 검색"
        value={query}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}

export default Search;
