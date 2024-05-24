import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


// 스타일드 컴포넌트를 사용하여 StyledDetail 스타일 정의
const StyledDetail = styled.div`
  width: 20%;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  background-color: #f8f8f8;

  h1 {
    font-size: 2rem;
  }

  .distance {
    color: #a0a0a0;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0.5rem 0;
  }

  .like {
    font-size: 2rem;
    cursor: pointer;
  }

  .liked {
    color: #47c83e;
    font-weight: bold;
  }

  .not-liked {
    color: red;
    font-weight: bold;
  }
`;


// RestaurantDetail 컴포넌트 정의 (props: items, onLikeToggle)
const RestaurantDetail = ({ items, onLikeToggle }) => {
  // URL 파라미터에서 id를 가져옴
  const { id } = useParams();
  // id에 해당하는 restaurant 정보를 items 배열에서 찾음
  const restaurant = items.find((item) => item.id === parseInt(id));

  // restaurant 정보가 없을 경우 에러 메시지 출력
  if (!restaurant) return <div>Restaurant not found</div>;

  // 좋아요 클릭 시 상태를 true/false로 변환하는 handleLikeToggle 함수
  const handleLikeToggle = () => {
    // 좋아요 클릭 시 (= Toggle 시) restaurant.id와 변경된 좋아요 상태 저장
    onLikeToggle(restaurant.id, !restaurant.liked);
  };

  return (
    <StyledDetail>
      {/* StyledDetail 서식 적용 */}
      {/* 레스토랑 이름 출력 */}
      <h1>{restaurant.name}</h1>
      {/* 레스토랑 주소 출력 */}
      <p>{restaurant.address}</p>
      {/* 레스토랑 거리 출력 */}
      <p className="distance">현재 {restaurant.distance}km 떨어져있어요!</p>
      {/* 레스토랑 리뷰 개수 출력 */}
      <p>{restaurant.reviewCount}개의 리뷰가 있어요!</p>
      {/* 레스토랑 평점 출력 */}
      <p>평점: {restaurant.rating}</p>
      {/* 레스토랑 좋아요 메시지 출력 (현재 상태값에 따른 메시지 출력) */}
      <p
        className={restaurant.liked ? "liked" : "not-liked"}
        onClick={handleLikeToggle}
      >
        좋아요:{" "}
        {restaurant.liked ? (
          <span className="liked">좋아요!</span>
        ) : (
          <span className="not-liked">아직 좋아요를 누르지 않았어요!</span>
        )}
      </p>
    </StyledDetail>
  );
};

// RestaurantDetail 컴포넌트 내보내기
export default RestaurantDetail;