import React from "react";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";

// 맛집 리스트를 담는 컨테이너를 스타일링합니다.
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function RestaurantList({ restaurants, setRestaurants }) {
  return (
    <ListContainer>
      {/* 맛집 리스트를 순회하며 각각의 맛집 카드를 렌더링합니다. */}
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          setRestaurants={setRestaurants}
        />
      ))}
    </ListContainer>
  );
}

export default RestaurantList;
