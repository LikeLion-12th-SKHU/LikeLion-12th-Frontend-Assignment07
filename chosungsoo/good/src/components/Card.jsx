import React, { useState } from "react";
import { styled } from "styled-components";

// Card 컴포넌트 정의
const Card = ({ name, address, imageUrl }) => {
  // 이모티콘의 상태를 관리하는 state 추가
  const [emojiState, setEmojiState] = useState(false);

  // 클릭 이벤트를 처리하는 함수
  const toggleEmoji = (e) => {
    // 이벤트 전파 막기
    e.stopPropagation();
    // 현재 이모티콘 상태의 반대 값으로 업데이트
    setEmojiState(!emojiState);
  };

  return (
    <div className="card">
      {/* 음식 카드의 이미지 */}
      <img src={imageUrl} alt={name} />
      {/* 음식 카드의 상세 정보 */}
      <div className="card-details">
        {/* 음식 이름 */}
        <h2>{name}</h2>
        {/* 음식 주소 */}
        <span>{address}</span>
        {/* 이모티콘 클릭 이벤트 추가 */}
        <span onClick={toggleEmoji}>
          {/* 이모티콘 상태에 따라 다른 이모티콘 렌더링 */}
          {emojiState ? "🤍" : "😵"}
        </span>
      </div>
    </div>
  );
};

export default Card;
