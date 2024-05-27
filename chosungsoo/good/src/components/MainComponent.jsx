import React, { useState } from "react";
import data from "../JMT.json";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import RestaurantDetail from "./RestaurantDetail";
import Card from "./Card";
import Emoji from "./Emoji";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #9dfffd;
  text-align: center;
`;

const StyledTitle = styled.div`
  text-align: center;
`;

// MainComponent 컴포넌트 정의
const MainComponent = () => {
  // 검색어를 상태로 관리
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어를 업데이트하는 함수
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // 검색어가 입력된 경우 필터링된 맛집 리스트 반환, 그렇지 않은 경우 전체 맛집 리스트 반환
  const filteredRestaurants = searchTerm
    ? data.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  // MainComponent 컴포넌트 반환
  return (
    <div className="main-container">
      <StyledTitle>
        {/* 페이지 제목 */}
        <h1>맛집 리스트</h1>

        {/* 검색창 추가 */}
        <input
          type="text"
          placeholder="맛집 검색"
          value={searchTerm}
          onChange={handleSearch}
        />
      </StyledTitle>
      {/* 카드 컨테이너 */}
      <div className="card-container">
        {/* 필터링된 맛집 리스트를 매핑하여 각각의 카드로 렌더링 */}
        {filteredRestaurants.map((restaurant) => (
          <StyledCard>
            {/* Link 컴포넌트를 사용하여 카드를 클릭할 때 해당 음식의 상세 정보
            페이지로 이동할 수 있도록 설정 */}
            <Link
              to={`/${restaurant.id}`}
              key={restaurant.id}
              className="card-link"
            >
              {/* Card 컴포넌트를 사용하여 각 음식 카드 렌더링 */}
              <Card
                name={restaurant.name}
                address={restaurant.address}
                imageUrl={restaurant.imageUrl}
              />
            </Link>
            <Emoji />
          </StyledCard>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
