import React from "react";
import styled from "styled-components";
import { useParams, useOutletContext } from "react-router-dom";

const StyledRead = styled.div`
  width: 30%;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  background-color: white;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0.5rem 0;
  }

  .distance {
    color: #a0a0a0;
  }

  .like {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .liked {
    color: green;
  }

  .no-liked {
    color: red;
  }
`;

const RestaurantRead = () => {
  const { id } = useParams(); // URL 파라미터 값 가져오기
  const { items, onLikeToggle } = useOutletContext(); // 전역 상태, 함수 가져오기
  const restaurant = items.find((item) => item.id === parseInt(id)); // 맛집 가져오기

  if (!restaurant) {
    return <StyledRead>not found</StyledRead>;
  }

  const handleLikeToggle = () => {
    onLikeToggle(restaurant.id, !restaurant.liked); // 좋아요 상태 변경
  };

  return (
    <StyledRead>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <p className="distance">현재 {restaurant.distance}km 떨어져있어요!</p>
      <p>{restaurant.reviewCount}개의 리뷰가 있어요!</p>
      <p>평점 : {restaurant.rating}</p>
      <p
        className={restaurant.liked ? "liked" : "no-liked"}
        onClick={handleLikeToggle}
      >
        좋아요:{" "}
        {restaurant.liked ? (
          <span className="liked">좋아요!</span>
        ) : (
          <span className="no-liked">아직 좋아요를 누르지 않았어요!</span>
        )}
      </p>
    </StyledRead>
  );
};

export default RestaurantRead;
