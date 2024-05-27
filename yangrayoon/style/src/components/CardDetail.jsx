import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CardDetail = styled.div`
  justify-content: left;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 4px #d4d4d4;
  position: relative;
  width: 250px;
`;
const CardContent = styled.p`
  color: gray;
`;
const CardLiked = styled.p`
  color: ${({ liked }) =>
    liked ? "green" : "red"}; //liked 누르면 초록색 안누르면 빨간색 ..~
`;
const RestaurantDetail = ({ restaurants }) => {
  const { id } = useParams();
  //useParams을 사용하여 id 값 가져옴
  const restaurant = restaurants.find((r) => r.id === parseInt(id));
  //id값과 일치하는 식당 정보 찾기
  return (
    <CardDetail>
      <div>
        <h2>{restaurant.name}</h2>
        <CardContent>
          <p>{restaurant.address}</p>
          <p>현재 {restaurant.distance}km 떨어져있어요!</p>
          <p>{restaurant.reviewCount}개의 리뷰가 있어요!</p>
          <p>평점: {restaurant.rating}</p>
        </CardContent>
        <CardLiked liked={restaurant.liked}>
          <p>
            좋아요:
            {restaurant.liked ? " 좋아요!" : " 아직 좋아요를 누르지 않았어요!"}
          </p>
        </CardLiked>
      </div>
    </CardDetail>
  );
};

export default RestaurantDetail;
