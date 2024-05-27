import React, { useState } from "react";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";

// 맛집 리스트를 표시하는 컴포넌트
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// 검색창을 감싸는 컨테이너 스타일
const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

// 검색 입력을 받는 input 스타일
const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
`;

function RestaurantList({ restaurants, setRestaurants }) {
  // 검색어를 상태로 관리
  const [searchTerm, setSearchTerm] = useState("");

  // 검색된 맛집 리스트를 필터링하여 표시
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 검색어 입력 시 실행되는 이벤트 핸들러
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* 검색창 */}
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="맛집 검색"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchContainer>
      {/* 맛집 리스트 표시 */}
      <ListContainer>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            setRestaurants={setRestaurants}
          />
        ))}
      </ListContainer>
    </div>
  );
}

export default RestaurantList;
