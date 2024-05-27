import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import JMTData from "../src/JMT.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import useInput from "./hooks/useInput";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const search = useInput(""); //검색어 처리하기 위해 useInput 사용

  useEffect(() => {
    setRestaurants(JMTData);
    //JMTData를 restaurants상태에 설정
  }, []); //실행될 때 한번만 이 코드를 실행함

  const toggleLike = (id) => {
    const updateLike = restaurants.map((restaurant) => {
      //map을 사용하여 liked 상태 업데이트
      if (restaurant.id === id) {
        //id가 restaurant.id와 일치하면
        return { ...restaurant, liked: !restaurant.liked }; // liked 값을 반전시켜 반환
      }
      return restaurant; //일치하지않으면 그대로 반환
    });
    setRestaurants(updateLike); //상태 업데이트
  };

  const filterRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.value.toLowerCase())
  ); //검색을 소문자로 변환하고 검색어 포함되어있는지 확인하는 필터링

  return (
    <>
      <div>
        <input type="text" value={search.value} onChange={search.onChange} />
      </div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {filterRestaurants.map((restaurant) => (
                  <Card
                    id={restaurant.id}
                    name={restaurant.name}
                    address={restaurant.address}
                    imageUrl={restaurant.imageUrl}
                    liked={restaurant.liked}
                    onToggleLike={toggleLike}
                  />
                ))}
              </div>
            }
          />
          <Route
            path="/restaurant/:id"
            element={<CardDetail restaurants={restaurants} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
