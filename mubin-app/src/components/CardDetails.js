// CardDetails.js 는 Card 컴포넌트에서 가게 카드들을 클릭하면 세부정보를 보여줌
import React from "react";
import styled from "styled-components";
const DetailsContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
`;
const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;
const Text = styled.p`
  color: #666;
  margin: 5px 0;
`;
// styled-com....를 상ㅇ하여 색상을 동적으로 변경함
// true 이면 초록색으로 false면 빨간색으로
// 특정 단어를 강조하거나 색상을 변경할 때 사용하는 span 태그 사용
const Liked = styled.span`
  color: ${(props) => (props.liked ? "green" : "red")};
  font-size: 18px;
`;
const CardDetails = ({
  name,
  address,
  distance,
  reviewCount,
  rating,
  liked,
  onLikeClick,
}) => {
  return (
    <DetailsContainer>
      <Title>{name}</Title>
      <Text>{address}</Text>
      <Text>현재 {distance}km 떨어져 있어요!</Text>
      <Text>{reviewCount}개의 리뷰가 있어요!</Text>
      <Text>평점: {rating}</Text>
      <Text>
        좋아요:{" "}
        <Liked liked={liked} onClick={onLikeClick}>
          {liked ? "좋아요!" : "아직 좋아요를 누르지 않았어요"}
        </Liked>
      </Text>
    </DetailsContainer>
  );
};

export default CardDetails;
