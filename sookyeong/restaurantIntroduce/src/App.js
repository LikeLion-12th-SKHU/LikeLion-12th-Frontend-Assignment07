import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Card from "./components/Card";
import RestaurantDetail from "./components/RestaurantDetail";
import JMT from "./JMT.json"; // JSON 파일 import
import Search from "./components/Search";
import useInput from "./hooks/useInput"; // useInput 훅 import

// 스타일드 컴포넌트를 사용하여 StyledText 스타일 정의
const StyledText = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  justify-content: center;

  img {
    width: 100px;
    border-radius: 50px;
  }

  h1 {
    display: flex;
    align-items: center;
    color: black;
    font-size: 2rem;
  }

  h2 {
    color: gray;
    font-size: 1rem;
  }
`;

// 메인 App 컴포넌트 정의
const App = () => {
  const [items, setItems] = useState([]); // 식당 목록 상태
  const [filteredItems, setFilteredItems] = useState([]); // 검색된 식당 목록 상태
  const { value: query, onChange: onChangeQuery } = useInput(""); // useInput 훅 사용

  // 초기 데이터 설정 및 useEffect를 이용한 데이터 초기화
  useEffect(() => {
    const itemsWithLikes = JMT.map((item) => ({ ...item, liked: false }));
    setItems(itemsWithLikes); // JSON 데이터를 상태로 설정
    setFilteredItems(itemsWithLikes); // 초기 상태로 모든 데이터를 설정
  }, []);

  // 검색 기능 구현
  const handleSearch = () => {
    if (query) {
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results); // 검색 결과를 filteredItems 상태로 설정
    } else {
      setFilteredItems(items); // 검색어가 없을 때 모든 데이터를 표시
    }
  };

  // 좋아요 토글 기능 구현
  const handleLikeToggle = (id, liked) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, liked } : item
    );
    setItems(updatedItems); // 전체 목록에서 해당 아이템의 좋아요 상태를 업데이트
    // 검색된 목록도 업데이트
    setFilteredItems(
      updatedItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <Router>
      <div>
        {/* tyledText 서식 적용 */}
        <StyledText>
          <div className="effect">
            <img
              src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/161932464_122649313203047_4286291972017512491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nBmowAQLtGEQ7kNvgEOxBDA&_nc_ht=scontent-gmp1-1.xx&oh=00_AYCtljzwUqQM7lnPjtfghk4H7ecALlON03jOarEzoIz-Cw&oe=6676F43D"
              alt="logo"
            />
            <h1>멋사 맛집</h1>
            <h2>서울 주변 먹을만한 식당들을 소개합니다.</h2>
          </div>
        </StyledText>

        {/* 검색 컴포넌트 */}
        <Search
          value={query}
          onChange={onChangeQuery}
          onSearch={handleSearch}
        />

        {/* 라우팅 설정 */}
        <Routes>
          {/* 메인 페이지 경로 설정 */}
          <Route
            path="/"
            element={
              <SearchResults
                items={filteredItems}
                onLikeToggle={handleLikeToggle}
              />
            }
          />
          {/* 식당 상세 페이지 경로 설정 */}
          <Route
            path="/:id"
            element={
              <RestaurantDetail items={items} onLikeToggle={handleLikeToggle} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

// 검색 결과 컴포넌트 정의
const SearchResults = ({ items, onLikeToggle }) => {
  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} item={item} onLikeToggle={onLikeToggle} />
      ))}
    </div>
  );
};

// App 컴포넌트 내보내기
export default App;
