import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  margin: 16px;
  margin: 16px;
`;

const Card = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  margin: 10px;
  border: 1px solid white;
  border-radius: 15%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Name = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Address = styled.p`
  font-size: 15px;
  color: #555;
`;

const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 16px;
`;

function RestaurantCard({ restaurant }) {
  const { id, name, address, imageUrl } = restaurant; // 맛집 데이터를 가져옴
  const [liked, setLiked] = useState(restaurant.liked); // '좋아요' 상태를 관리

  const handleLike = () => {
    setLiked(!liked); // '좋아요' 상태를 업데이트
    restaurant.liked = !liked; // 맛집 데이터의 좋아요 상태를 업데이트
  };

  return (
    <CardContainer>
      <Link to={`/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <Card>
          <Image src={imageUrl} alt={name} />
          <Content>
            <Name>{name}</Name>
            <Address>{address}</Address>
          </Content>
        </Card>
      </Link>
      <LikeButton liked={liked} onClick={handleLike}>
        {/* 버튼 클릭 시 버튼 모양을 다르게 표시 */}
        {liked ? "❤️" : "😵"}
      </LikeButton>
    </CardContainer>
  );
}

export default RestaurantCard;
