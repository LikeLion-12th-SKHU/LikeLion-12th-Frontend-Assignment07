import React from "react";
import { useParams } from "react-router-dom";
import data from "../JMT.json";
import styled from "styled-components";

const StyledDetail = styled.div`
  text-align: center;
  border: 2px solid skyblue;
  border-radius: 20px;
  width: 80%;
  margin: auto;
`;
// RestaurantDetail 컴포넌트 정의
const RestaurantDetail = () => {
  // URL에서 음식의 ID를 가져오기 위해 useParams 훅 사용
  const { id } = useParams();

  // URL에서 가져온 ID에 해당하는 맛집 찾기
  const restaurant = data.find((restaurant) => restaurant.id.toString() === id);

  // 맛집이 없는 경우 표시할 문구
  if (!restaurant) {
    return <div>해당하는 맛집이 없습니다.</div>;
  }

  // 맛집이 있는 경우 해당 맛집의 상세 정보 표시
  return (
    <StyledDetail>
      <div className="restaurant-detail">
        {/* 맛집 이름 */}
        <h2>{restaurant.name}</h2>
        {/* 맛집 주소 */}
        <p>주소: {restaurant.address}</p>
        {/* 맛집 거리 */}
        <p>거리: {restaurant.distance}km</p>
        {/* 맛집 리뷰 수 */}
        <p>리뷰 수: {restaurant.reviewCount}</p>
        {/* 맛집 좋아요 여부 */}
        <p>좋아요: {restaurant.liked ? "좋아요" : "싫어요"}</p>
      </div>
    </StyledDetail>
  );
};

export default RestaurantDetail;
