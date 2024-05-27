import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import jsonData from "./JMT.json";
import Input from "./components/Input";
import { useNavigate } from "react-router-dom";

// restaurants는 JMT.json의 배열 값이라 []로 초기값 설정, search는 그냥 변수라 ''로 초기값 설정. 각각 set~ 함수로 값이 변함
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 첫 실행에만 jsonData 쭉 보여주게 함
  useEffect(() => {
    setRestaurants(jsonData);
  }, []);

  // filter 메서드를 사용하여 검색한 키워드 중에 restaurant의 name에 포함되는 것이 있는지 확인, includes 메서드는 일치하는 키워드가 있으면 true, 없으면 false
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.includes(search)
  );

  const handleDetailClick = (id) => {
    const restaurant = restaurants.find((item) => item.id === id);
    navigate(`/${id}`, {
      state: { liked: restaurant ? restaurant.liked : false },
    });
  };

  return (
    // Input 스타일 컴포넌트 사용,  사용자가 입력(e.target.value는 사용자가 입력한 값) => onChange 발생 => setSearch() 호출되면서 search의 값이 e.target.value로 바뀜
    <div className="App">
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="입력하세요"
      />
      {/* map()함수로 필터링된 음식점 키워드 들을 쭉 훑으면서 일치하는 음식점의 배열로 싹 새롭게 갈아줌 */}
      <div className="cards">
        {filteredRestaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            address={restaurant.address}
            imageUrl={restaurant.imageUrl}
            liked={restaurant.liked}
            onDetailsClick={() => handleDetailClick(restaurant.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
