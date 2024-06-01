import React from "react";
import Div from "./Div";

function Card({
  id,
  name,
  address,
  imageUrl,
  liked,
  onLikeClick,
  onDetailsClick,
}) {
  return (
    <Div className="card">
      <div className="card_info">
        <h1>
          {name}{" "}
          <span onClick={() => onLikeClick(id)}>{liked ? "❤️" : "😒"}</span>
          <button onClick={onDetailsClick}>자세히</button>
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
