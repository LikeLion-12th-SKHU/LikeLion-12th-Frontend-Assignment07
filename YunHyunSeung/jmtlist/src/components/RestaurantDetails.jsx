import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import data from "../JMT.json";

const RestaurantDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const parsedId = parseInt(id, 10); // URL에서 받은 id값은 처음에 문자열이기 때문에 10진수로 바꿔줌

  // restaurant, liked를 useState로 정의
  const [restaurant, setRestaurant] = useState(null);
  const [liked, setLiked] = useState(false);

  // 처음이랑 parsedId가 바뀔 때 (JMT.json에서 parsedId와 일치하는 음식점 찾음, 찾으면 상태 업데이트)실행
  useEffect(() => {
    const foundRestaurant = data.find((item) => item.id === parsedId);
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      setLiked(foundRestaurant.liked);
    }
  }, [parsedId]);

  // 이모지를 클릭해서 location.state가 변경되면 이를 감지하고 liked 상태를 업데이트함
  useEffect(() => {
    if (location.state && location.state.liked !== undefined) {
      setLiked(location.state.liked);
    }
  }, [location.state]);

  if (!restaurant) {
    return <div>해당하는 레스토랑을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <p>{restaurant.name}</p>
      <p>{restaurant.address}</p>
      <p>{restaurant.distance}km</p>
      <p>별점은 {restaurant.rating}점</p>
      <p>
        <img src={restaurant.imageUrl} alt={restaurant.name} />
      </p>
      <p>{restaurant.reviewCount} 개의 리뷰가 있어요!</p>
      <p>{liked ? "좋아요를 눌렀어요!" : "좋아요를 아직 누르지 않았어요!"}</p>
    </div>
  );
};

export default RestaurantDetails;
