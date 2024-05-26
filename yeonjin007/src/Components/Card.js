//card 컴포넌트를 만든이유:맛집들을 보여주고 좋아요 버튼을 누르면 toggleLike 함수가 실행되어 좋아요 상태를 토글함
//재사용할려고 쓴다. 맛집 리스트들을 볼때 동이라한 요 컴포넌트를 보여줌
//card 컴포넌트에는 상호명,주소,이미지,좋아요 의 정보를 담고있음

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: 'hidden';
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  position: relative;
  font-family: Arial, sans-serif;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 18px;
`;

const Address = styled.p`
  margin: 0;
  color: #666;
  font-size: 16px;
`;

function Card({ name, address, imageUrl, liked, toggleLike }) //toggleLike 함수가 실행되면 좋아요 상태를 토클해줌!
{
  return (
    <CardContainer>
      <LikeButton onClick={toggleLike}> 
        {liked ? '🤍' : '😵'}
      </LikeButton>
      <Image src={imageUrl} alt={name} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
}

export default Card;
