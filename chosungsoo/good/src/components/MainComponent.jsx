import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 스타일링된 컴포넌트를 정의하여 재사용 가능하게 설정
const StyledCard = styled.div`
  background-color: #9dfffd;
  text-align: center;
  display: block;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100px;
  text-align: center;
`;

const Name = styled.div`
  margin: auto;
`;

const Address = styled.div`
  margin: auto;
`;

const Card = styled.div`
  text-align: center;
  background-color: aliceblue;
`;

const EmojiButton = styled.div`
  text-align: center;
`;

// MainComponent 컴포넌트 정의
function MainComponent({ restaurant, setRestaurants }) {
  // 좋아요 버튼 클릭 시 호출되는 함수
  const emojiLike = () => {
    // 이전 상태를 기반으로 restaurant의 liked 상태를 토글
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((r) =>
        r.id === restaurant.id ? { ...r, liked: !r.liked } : r
      )
    );
  };

  // MainComponent 컴포넌트 반환
  return (
    <StyledCard>
      {/* Link 컴포넌트를 사용하여 클릭 시 해당 레스토랑의 상세 페이지로 이동 */}
      <Link to={`/restaurant/${restaurant.id}`}>
        {/* Card 컴포넌트를 사용하여 레스토랑 정보를 카드 형식으로 렌더링 */}
        <Card>
          <Name> {restaurant.name} </Name>
          <Address> {restaurant.address} </Address>
          {/* 레스토랑 이미지를 표시 */}
          <Img src={restaurant.imageUrl} />
        </Card>
      </Link>
      <div>
        {/* 좋아요 버튼을 클릭할 수 있는 영역 */}
        <EmojiButton onClick={emojiLike}>
          {/* 좋아요 상태에 따라 이모지 변경 */}
          {restaurant.liked ? "🤍" : "😵"}
        </EmojiButton>
      </div>
    </StyledCard>
  );
}

export default MainComponent;
