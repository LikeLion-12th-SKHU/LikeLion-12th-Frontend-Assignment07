import React, { useState } from "react";
import Div from "./Div";
import { useNavigate } from "react-router-dom";

function Card({ id, name, address, imageUrl, liked: initialLiked }) {
  const [liked, setLiked] = useState(initialLiked);
  const navigate = useNavigate(); // 네비게이션 훅으로 네비게이션 함수 정의

  // 좋아요 버튼 정의, liked 값을 반대로 false에서 true로
  const toggleLike = () => {
    setLiked(!liked);
  };

  // 레스토랑의 세부정보 경로로 이동하게 함
  const handleDetailsClick = () => {
    navigate(`/${id}`);
  };

  return (
    <Div className="card">
      <div className="card_info">
        <h1>
          {name} <span onClick={toggleLike}>{liked ? "❤️" : "😒"}</span>
          <button onClick={handleDetailsClick}>자세히</button>
        </h1>
        <p>{address}</p>
      </div>
      <div className="card_image">
        <img src={imageUrl} alt={name} />
      </div>
    </Div>
  );
}

export default Card;
