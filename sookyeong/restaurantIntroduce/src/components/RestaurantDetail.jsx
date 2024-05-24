import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledDetail = styled.div`
  width: 20%;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  background-color: #f8f8f8;

  h1 {
    font-size: 2rem;
  }

  .distance {
    color: #a0a0a0;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0.5rem 0;
  }

  .like {
    font-size: 2rem;
    cursor: pointer;
  }

  .liked {
    color: #47c83e;
    font-weight: bold;
  }

  .not-liked {
    color: red;
    font-weight: bold;
  }
`;

const RestaurantDetail = ({ items, onLikeToggle }) => {
  const { id } = useParams();
  const restaurant = items.find((item) => item.id === parseInt(id));

  if (!restaurant) return <div>Restaurant not found</div>;

  const handleLikeToggle = () => {
    onLikeToggle(restaurant.id, !restaurant.liked);
  };

  return (
    <StyledDetail>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <p className="distance">현재 {restaurant.distance}km 떨어져있어요!</p>
      <p>{restaurant.reviewCount}개의 리뷰가 있어요!</p>
      <p>평점: {restaurant.rating}</p>
      <p
        className={restaurant.liked ? "liked" : "not-liked"}
        onClick={handleLikeToggle}
      >
        좋아요:{" "}
        {restaurant.liked ? (
          <span className="liked">좋아요!</span>
        ) : (
          <span className="not-liked">아직 좋아요를 누르지 않았어요!</span>
        )}
      </p>
    </StyledDetail>
  );
};

export default RestaurantDetail;
