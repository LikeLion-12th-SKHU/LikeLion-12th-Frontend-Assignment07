import React from "react";
import styled from "styled-components";

// 카드 컨테이너 스타일 정의
const CardContainer = styled.div`
  display: flex;
  border-radius: 8px;
  width: 600px;
  height: 200px;
  align-items: center;
  border: 1px solid #000;
  margin-top: 10px;
  padding: 10px;
`;

// 이미지 스타일 정의
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

// 내용 컨테이너 스타일 정의
const Container = styled.div`
  flex-direction: column;
  padding: 10px;
`;

// 레스토랑 이름 스타일 정의
const Name = styled.h1`
  font-size: 20px;
`;

// 레스토랑 주소 스타일 정의
const Address = styled.p`
  font-size: 15px;
`;

// 좋아요 버튼 스타일 정의
const LikeButton = styled.button`
  margin-left: 10px;
`;

// Card 컴포넌트 정의
// 레스토랑의 이름, 주소, 이미지, 좋아요 상태, 좋아요 토글 기능을 props로 받아 렌더링
const Card = ({ name, address, imageUrl, liked, updateLike }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={name} />
      <Container>
        <Name>{name}</Name>
        <Address>{address}</Address>
      </Container>
      <LikeButton onClick={updateLike}>{liked ? "🤍" : "😵"}</LikeButton>
    </CardContainer>
  );
};

export default Card;
