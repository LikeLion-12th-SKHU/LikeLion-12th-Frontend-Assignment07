import React, { useState } from "react";
import styled from "styled-components";
import CardDetails from "./CardDetails";

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
`;
const Name = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;
const Address = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;
const LikeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: transparent;
`;
// Card 컴포넌트 함수로 정의 상태 변수들 선언
function Card({ restaurant }) {
  const [showDetails, setShowDetails] = useState(false);
  // 음식점들의 상세 정보 표시
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  // 음식점 정보 관리
  const [liked, setLiked] = useState(false);
  // 좋아요

  //버튼을 누르면 상태 변경을 함
  const handleLike = () => {
    setLiked(!liked);
  };

  //음식점 카드(?)를 누르면 세부정보를 보여줌
  const handleCardClick = () => {
    setSelectedRestaurant(restaurant);
    setShowDetails(true);
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    // 이벤트 처리에 사용되는 메소드 이벤트 전파를 중단시킴
    // 이벤트가 상위에서 발생하고 하위까지 내려가는 것을 방지하기 위함!
    setLiked(!liked);
  };

  return (
    <>
      {showDetails ? (
        <CardDetails
          {...selectedRestaurant}
          liked={liked}
          onLikeClick={handleLike}
        />
      ) : (
        <CardContainer onClick={handleCardClick}>
          <Image src={restaurant.imageUrl} alt={restaurant.name} />
          <Name>{restaurant.name}</Name>
          <Address>{restaurant.address}</Address>
          <LikeButton onClick={handleToggle}>{liked ? "🤍" : "😵"}</LikeButton>
        </CardContainer>
      )}
    </>
  );
}

export default Card;
