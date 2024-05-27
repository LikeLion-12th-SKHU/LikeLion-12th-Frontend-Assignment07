import React, { useState } from "react";
import styled from "styled-components";

const StyleEmoji = styled.div`
  border: 5px solid skyblue;
  border-radius: 20px;
  width: fit-content;
  margin: auto;
`;

const Emoji = () => {
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
    <StyleEmoji>
      <span onClick={toggleEmoji}>
        {/* 이모티콘 상태에 따라 다른 이모티콘 렌더링 */}
        {emojiState ? "🤍" : "😵"}
      </span>
    </StyleEmoji>
  );
};

export default Emoji;
