import React, { useState } from "react";
import Div from "./Div";

function Card({ name, address, imageUrl, liked: initialLiked }) {
  const [liked, setLiked] = useState(initialLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Div className="card">
      <div className="card_info">
        <h1>
          {name} <span onClick={toggleLike}>{liked ? "❤️" : "😒"}</span>
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
