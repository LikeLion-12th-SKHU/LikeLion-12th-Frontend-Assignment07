import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 스타일드 컴포넌트를 사용하여 스타일 정의
const StyledWrapper = styled.div`
  display: flex; /* 자식 요소들을 수평으로 정렬하기 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  margin: 1rem; /* 바깥쪽 여백 */
`;

const StyledCard = styled.div`
  background-color: #f8f8f8; /* 배경색 설정 */
  width: 30%; /* 카드의 너비 */
  display: flex; /* 자식 요소들을 수평으로 정렬하기 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  padding: 1rem; /* 내부 여백 */
  border: 1px solid #ddd; /* 테두리 설정 */
  border-radius: 8px; /* 테두리 반경 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */

  img {
    width: 30%; /* 이미지의 너비 */
    height: auto; /* 이미지의 높이 자동 조정 */
    border-radius: 8px; /* 이미지 테두리 반경 */
    margin-right: 1rem; /* 오른쪽 여백 */
  }

  .info {
    display: flex; /* 자식 요소들을 수직으로 정렬하기 위해 flex 사용 */
    flex-direction: column; /* 수직으로 정렬 */
    justify-content: center; /* 수직 가운데 정렬 */
    flex: 1; /* 남은 공간 모두 차지 */
  }

  h2 {
    font-size: 1.2rem; /* 제목 글꼴 크기 */
    margin: 0.5rem 0; /* 위아래 여백 */
  }

  p {
    color: #666; /* 글자색 */
    margin: 0.5rem 0; /* 위아래 여백 */
  }
`;

const StyledLike = styled.div`
  display: flex; /* 자식 요소들을 수평으로 정렬하기 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  padding: 1rem; /* 내부 여백 */
  cursor: pointer; /* 커서 타입 설정 */
  font-size: 1.5rem; /* 글꼴 크기 */
`;

// Card 컴포넌트 정의
const Card = ({ item, onLikeToggle }) => {
  const [liked, setLiked] = useState(false); /* 좋아요 상태 관리를 위한 상태 */

  // 좋아요 토글 함수
  const handleLikeToggle = () => {
    setLiked(!liked); /* 좋아요 상태를 토글 */
    onLikeToggle(
      item.id,
      !liked
    ); /* 부모 컴포넌트로부터 전달받은 onLikeToggle 함수 호출 */
  };

  return (
    <StyledWrapper>
      <StyledCard>
        {/* 레스토랑 상세 페이지로 이동하는 링크 */}
        <Link to={`/${item.id}`} style={{ textDecoration: "none" }}>
          <img src={item.imageUrl} alt={item.name} />
          <div className="info">
            <h2>{item.name}</h2>
            <p>{item.address}</p>
          </div>
        </Link>
      </StyledCard>
      {/* 좋아요 버튼 */}
      <StyledLike onClick={handleLikeToggle}>{liked ? "🤍" : "😵"}</StyledLike>
    </StyledWrapper>
  );
};

export default Card;
