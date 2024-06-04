import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// 스타일링된 컴포넌트 정의
const StyledDetail = styled.div`
  text-align: center;
  border: 2px solid skyblue;
  border-radius: 20px;
  width: 80%;
  margin: auto;
`;

const EmojiLike = styled.div`
  color: black;
`;

// RestaurantDetail 컴포넌트 정의
const RestaurantDetail = ({ restaurants, setRestaurants }) => {
  // URL 파라미터에서 음식점의 ID를 가져오기 위해 useParams 훅 사용
  const { id } = useParams();

  // 음식점 정보를 저장할 상태 정의
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // 음식점 목록에서 해당 ID와 일치하는 음식점을 찾아 상태로 설정
    const foundRestaurant = restaurants.find((r) => r.id === parseInt(id));
    setRestaurant(foundRestaurant);
  }, [id, restaurants]);

  // 음식점이 없는 경우 표시할 메시지
  if (!restaurant) {
    return <div>해당하는 맛집이 없습니다.</div>;
  }

  // 좋아요 버튼을 클릭했을 때의 동작 정의
  const emojiLike = () => {
    // 이전 상태를 기반으로 liked 상태를 토글
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((r) =>
        r.id === restaurant.id ? { ...r, liked: !r.liked } : r
      )
    );
  };

  // 음식점 정보가 있는 경우 해당 정보를 렌더링
  return (
    <StyledDetail>
      <div className="restaurant-detail">
        {/* 음식점 이름 */}
        <h2>{restaurant.name}</h2>
        {/* 음식점 주소 */}
        <p>주소: {restaurant.address}</p>
        {/* 음식점 거리 */}
        <p>거리: {restaurant.distance}km</p>
        {/* 음식점 리뷰 수 */}
        <p>리뷰 수: {restaurant.reviewCount}</p>
        <div>
          {/* 좋아요 상태를 표시하고 토글할 수 있는 영역 */}
          <EmojiLike onClick={emojiLike}>
            <p>좋아요: {restaurant.liked ? "좋아요" : "싫어요"}</p>
          </EmojiLike>
        </div>
      </div>
    </StyledDetail>
  );
};

export default RestaurantDetail;
