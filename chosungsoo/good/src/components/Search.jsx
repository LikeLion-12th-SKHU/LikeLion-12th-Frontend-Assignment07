import React, { useState } from "react";
import styled from "styled-components";
import MainComponent from "./MainComponent";

// 스타일링된 컴포넌트 정의
const FoodList = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const EachFood = styled.div`
  margin: 20px;
  border-radius: 10px;
`;

const FoodSearch = styled.div`
  margin-bottom: 20px;
  margin: auto;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
  margin: 30px auto;
  border-radius: 10px;
  text-align: center;
`;

// RestaurantList 컴포넌트 정의
function RestaurantList({ restaurants, setRestaurants }) {
  // 검색어 상태를 관리하는 useState 훅
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어를 기반으로 필터링된 맛집 리스트 생성
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 검색어 변경 시 상태를 업데이트하는 함수
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 컴포넌트 렌더링
  return (
    <div>
      {/* 검색 입력 필드를 포함하는 영역 */}
      <FoodSearch>
        <SearchInput
          type="text"
          placeholder="맛집 검색"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </FoodSearch>
      {/* 필터링된 맛집 리스트를 표시하는 영역 */}
      <FoodList>
        {filteredRestaurants.map((restaurant) => (
          <EachFood key={restaurant.id}>
            <MainComponent
              restaurant={restaurant}
              setRestaurants={setRestaurants}
            />
          </EachFood>
        ))}
      </FoodList>
    </div>
  );
}

export default RestaurantList;
