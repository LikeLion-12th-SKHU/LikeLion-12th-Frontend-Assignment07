import React, { useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import JMT from "./JMT.json";

function App() {
  const [restaurants, setRestaurants] = useState(JMT); // JSON 데이터를 상태로 설정

  // 검색 기능을 구현 함수 !!
  const searchRestaurants = (query) => {
    // 검색어에 해당하는 가게를 필터링 함 !
    const filtered_Restaurants = JMT.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      //toLowerCase() 메서드느ㅡㄴ 문자열을 소문자로 변환하는 메서드에요!
      //영어를 쓰지는 않지만 그래도 이런 기능이 존재하길래 넣어봤습니당
      // includes() 메서드는 배열ㅇ나 문자열에 지정된 값이 포함되있는지 여부를 확인하는 메서드에요!
      //  배열에 특정 요소가 포함되어 있다면 true를 반환 아니면 false 반환
    );
    setRestaurants(filtered_Restaurants);
  };

  return (
    <div>
      <Search searchRestaurants={searchRestaurants} />{" "}
      {/* 검색 컴포넌트를 렌더링함  */}
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id} restaurant={restaurant} /> // Card 컴포넌트를 렌더링합니다.
      ))}
    </div>
  );
}

export default App;
