import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  text-align: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 16px 0;
`;

const Address = styled.p`
  font-size: 14px;
  color: #777;
`;

const LikeButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const LikeStatus = styled.p`
  font-size: 14px;
  color: ${(props) => (props.liked ? "green" : "red")};
`;

function RestaurantCard({ restaurant, setRestaurants }) {
  const toggleLike = () => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((r) =>
        r.id === restaurant.id ? { ...r, liked: !r.liked } : r
      )
    );
  };

  return (
    <CardContainer>
      {/* 카드 클릭 시 해당 맛집의 상세 페이지로 이동하는 링크 */}
      <Link to={`/restaurant/${restaurant.id}`}>
        <Image src={restaurant.imageUrl} alt={restaurant.name} />
        <Title>{restaurant.name}</Title>
        <Address>{restaurant.address}</Address>
      </Link>
      <div>
        {/* 좋아요 버튼과 상태를 표시하는 요소 */}
        {restaurant.liked ? "🤍" : "😵"}
        <LikeButton onClick={toggleLike}>
          {restaurant.liked ? "좋아요 취소" : "좋아요"}
        </LikeButton>
      </div>
      {/* 좋아요 상태를 나타내는 텍스트 */}
      <LikeStatus liked={restaurant.liked}>
        {restaurant.liked ? "좋아요!" : "아직 좋아요를 누르지 않았어요!"}
      </LikeStatus>
    </CardContainer>
  );
}

export default RestaurantCard;
