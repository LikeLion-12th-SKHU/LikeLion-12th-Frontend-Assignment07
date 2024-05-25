import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 16px 0;
`;

const Address = styled.p`
  font-size: 18px;
  color: #777;
`;

const Distance = styled.p`
  font-size: 18px;
  color: #777;
`;

const Rating = styled.p`
  font-size: 18px;
  color: #777;
`;

const LikeButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
`;

const LikeStatus = styled.p`
  font-size: 14px;
  color: ${(props) => (props.liked ? "green" : "red")};
`;

function RestaurantDetail({ restaurants, setRestaurants }) {
  // URL 파라미터에서 맛집 ID를 가져옵니다.
  const { id } = useParams();
  // 선택된 맛집 상태를 관리합니다.
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // 맛집 목록에서 해당 ID와 일치하는 맛집을 찾아 설정합니다.
    const foundRestaurant = restaurants.find((r) => r.id === parseInt(id));
    setRestaurant(foundRestaurant);
  }, [id, restaurants]);

  // 선택된 맛집이 없는 경우를 처리합니다.
  if (!restaurant) {
    return <div>맛집 정보를 찾을 수 없습니다.</div>;
  }

  // 좋아요 버튼을 눌렀을 때의 동작을 정의합니다.
  const toggleLike = () => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((r) =>
        r.id === restaurant.id ? { ...r, liked: !r.liked } : r
      )
    );
  };

  return (
    <DetailContainer>
      {/* 맛집 이미지 */}
      <Image src={restaurant.imageUrl} alt={restaurant.name} />
      {/* 맛집 이름 */}
      <Title>{restaurant.name}</Title>
      {/* 맛집 주소 */}
      <Address>{restaurant.address}</Address>
      {/* 맛집과 사용자 간의 거리 */}
      <Distance>거리: {restaurant.distance}km</Distance>
      {/* 맛집 평점 */}
      <Rating>평점: {restaurant.rating}</Rating>
      <div>
        {/* 좋아요 버튼과 상태를 표시하는 요소 */}
        {restaurant.liked ? "🤍" : "😵"}
        <LikeButton onClick={toggleLike}>
          {restaurant.liked ? "좋아요 취소" : "좋아요"}
        </LikeButton>
      </div>
      {/* 좋아요 상태를 나타내는 텍스트 */}
      <LikeStatus liked={restaurant.liked}>
        {restaurant.liked ? "좋아요!" : "아직 좋아요를 누르지 않았어요!"}
      </LikeStatus>
    </DetailContainer>
  );
}

export default RestaurantDetail;
