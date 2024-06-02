import React, { useState } from "react";
import data from "../JMT.json";
import { Link } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #9dfffd;
  text-align: center;
`;

const StyledTitle = styled.div`
  text-align: center;
`;

const StyleEmoji = styled.div`
  border: 5px solid skyblue;
  border-radius: 20px;
  width: fit-content;
  margin: auto;
`;

// MainComponent 컴포넌트 정의
const MainComponent = () => {
  // 검색어를 상태로 관리
  const [searchTerm, setSearchTerm] = useState("");
  // 맛집 데이터를 상태로 관리
  const [restaurants, setRestaurants] = useState(data);

  // 검색어를 업데이트하는 함수
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //---------------------수정 한 부분(모든 이모티콘이 동시에 바뀌는 현상 발생)---------------------------------

  // 이모티콘의 상태를 관리하는 state 추가
  const [emojiState, setEmojiState] = useState(false);

  // 클릭 이벤트를 처리하는 함수
  const toggleEmoji = (item) => {
    setEmojiState(!emojiState); // 이모티콘 상태 토글
    toggleLiked(item.id); // liked 값을 토글하는 함수 호출
  };
  //----------------------------------------------------------------------//

  // JSON 데이터를 업데이트하는 함수
  const toggleLiked = (itemId) => {
    const updatedRestaurants = restaurants.map((item) => {
      if (item.id === itemId) {
        return { ...item, liked: !item.liked }; // liked 값을 토글
      }
      return item;
    });
    setRestaurants(updatedRestaurants); // 상태 업데이트
  };

  // MainComponent 컴포넌트 반환
  return (
    <div className="main-container">
      <StyledTitle>
        {/* 페이지 제목 */}
        <h1>맛집 리스트</h1>

        {/* 검색창 추가 */}
        <input
          type="text"
          placeholder="맛집 검색"
          value={searchTerm}
          onChange={handleSearch}
        />
      </StyledTitle>
      {/* 카드 컨테이너 */}
      <div className="card-container">
        {/* 필터링된 맛집 리스트를 매핑하여 각각의 카드로 렌더링 */}
        {restaurants
          .filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <StyledCard key={item.id}>
              {/* Link 컴포넌트를 사용하여 카드를 클릭할 때 해당 음식의 상세 정보
              페이지로 이동할 수 있도록 설정 */}
              <Link to={`/${item.id}`} className="card-link">
                {/* Card 컴포넌트를 사용하여 각 음식 카드 렌더링 */}
                <Card
                  name={item.name}
                  address={item.address}
                  imageUrl={item.imageUrl}
                />
              </Link>
              {/* 이모티콘 추가 */}
              <StyleEmoji onClick={() => toggleEmoji(item)}>
                {emojiState ? "🤍" : "😵"}
              </StyleEmoji>
            </StyledCard>
          ))}
      </div>
    </div>
  );
};

export default MainComponent;
