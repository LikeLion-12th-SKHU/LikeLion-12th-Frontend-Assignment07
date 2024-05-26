//클릭했을때 맛집의 세부정보를 보여주는 역할
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0; 
  border-radius: 8px; 
  margin: 20px auto; 
  width: 80%; 
  max-width: 600px; 
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Text = styled.p`
  color: #666;
  margin: 5px 0; 
`;

const Liked = styled.span`
  color: ${props => props.liked ? 'red' : 'grey'}; // 좋아요 상태에 따른 색상 변경
  font-size: 20px;
`;

function Details({ restaurants }) {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found!</div>;
  }

  return ( //맛집의 세부정보를 표시함
    <DetailsContainer>
      <Title>{restaurant.name}</Title>
      <Text>주소: {restaurant.address}</Text>
      <Text>거리: {restaurant.distance}km</Text>
      <Text>리뷰 수: {restaurant.reviewCount}</Text>
      <Text>평점: {restaurant.rating}</Text>
      <Text>좋아요: <Liked liked={restaurant.liked}>{restaurant.liked ? '좋아요!' : '아직 좋아요를 누르지 않았어요'}</Liked></Text>
    </DetailsContainer>
  );
}

export default Details;
