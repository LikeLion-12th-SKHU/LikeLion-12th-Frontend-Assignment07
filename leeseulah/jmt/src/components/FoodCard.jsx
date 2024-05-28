import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardAddress,
  LikeButton,
} from "./StyledComponents";
import { useNavigate } from "react-router-dom";

// 음식 카드 컴포넌트 정의
const FoodCard = ({ food, toggleLike }) => {
  const navigate = useNavigate();

  // 좋아요 버튼 클릭 이벤트
  const handleLikeClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링을 방지하여 부모 요소의 클릭 이벤트가 발생하는 것을 막음
    toggleLike(food.id); // 부모 컴포넌트에서 전달된 toggleLike 함수를 호출하여 좋아요 상태를 변경
  };

  // 카드 클릭 이벤트
  const handleCardClick = () => {
    navigate(`/food/${food.id}`, { state: { liked: food.liked } });
  };

  // 음식 카드를 렌더링
  // 좋아요 상태에 따라 아이콘을 표시
  return (
    <Card onClick={handleCardClick}>
      <CardImage src={food.imageUrl} alt={food.name} />
      <CardContent>
        <CardTitle>{food.name}</CardTitle>
        <CardAddress>{food.address}</CardAddress>
      </CardContent>
      <LikeButton onClick={handleLikeClick}>
        {food.liked ? "🤍" : "😵"}
      </LikeButton>
    </Card>
  );
};

export default FoodCard;
