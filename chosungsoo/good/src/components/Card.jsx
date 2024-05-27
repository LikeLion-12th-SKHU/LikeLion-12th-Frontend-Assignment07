import React, { useState } from "react";
import styled from "styled-components";

// 스타일드 컴포넌트를 사용하여 Card 컴포넌트 스타일링
const StyledCard = styled.div`
  /* 카드 스타일 */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  /* 이미지 스타일 */
  img {
    width: 20%;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  /* 상세 정보 스타일 */
  .card-details {
    /* 이모티콘 토글 버튼을 위한 스타일 */
    position: relative;
    /* 이모티콘 스타일 */
    .emoji {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
`;

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
    <StyledCard>
      {/* 음식 카드의 이미지 */}
      <img src={imageUrl} alt={name} />
      {/* 음식 카드의 상세 정보 */}
      <div className="card-details">
        {/* 음식 이름 */}
        <h2>{name}</h2>
        {/* 음식 주소 */}
        <span>{address}</span>
      </div>
    </StyledCard>
  );
};

export default Card;
