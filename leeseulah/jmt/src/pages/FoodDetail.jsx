import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

// 스타일드 컴포넌트를 사용하여 세부 페이지의 스타일을 지정
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

// 음식 상세 정보를 보여주는 컴포넌트
const FoodDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch("/JMT.json")
      .then((response) => response.json())
      .then((data) => {
        const foundFood = data.find((item) => item.id === parseInt(id));
        setFood(foundFood); // 해당 id와 일치하는 음식 정보를 저장
      });
  }, [id]);

  // 좋아요 상태에 따라 텍스트를 반환하는 함수
  const renderLikeText = () => {
    if (!food) return null;
    return state?.liked
      ? "좋아요: 좋아요!"
      : "좋아요: 아직 좋아요를 누르지 않았어요!";
  };

  if (!food) {
    return <div>음식점을 찾을 수 없습니다.</div>;
  }

  // 음식 정보를 렌더링
  return (
    <DetailContainer>
      <h1>{food.name}</h1>
      <p>주소: {food.address}</p>
      <p>현재 {food.distance}KM 떨어져있어요!</p>
      <p>{food.reviewCount}개의 리뷰가 있어요!</p>
      <p>평점: {food.rating}</p>
      <p>{renderLikeText()}</p>
    </DetailContainer>
  );
};

export default FoodDetail;
