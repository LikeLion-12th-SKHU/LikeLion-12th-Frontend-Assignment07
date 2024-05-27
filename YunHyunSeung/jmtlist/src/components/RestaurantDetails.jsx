import React from "react";
import { useParams, useLocation } from "react-router-dom";
import data from "../JMT.json";

const RestaurantDetails = () => {
  const { id } = useParams(); // useParams 훅을 사용하여 URL 파라미터에서 id 값을 가져옴
  const { state } = useLocation(); // useLocation 훅을 사용해서 현재 경로의 위치 정보를 가져옴

  const parsedId = parseInt(id, 10); // id를 10진수로

  const restaurant = data.find((item) => item.id === parsedId); // 전달받은 id와 일치하는 restaurant 데이터를 찾음

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
      <p>
        {state && state.liked
          ? "좋아요를 눌렀어요!"
          : "좋아요를 아직 누르지 않았어요!"}
      </p>
    </div>
  );
};

export default RestaurantDetails;
