import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantList from "./RestaurantList";
import RestaurantDetail from "./RestaurantDetail";
import JMTData from "./JMT.json";

function App() {
  // 맛집 데이터를 상태로 관리합니다.
  const [restaurants, setRestaurants] = useState(JMTData);

  return (
    <Router>
      <Routes>
        {/* 맛집 리스트 페이지에 대한 라우팅 */}
        <Route
          path="/"
          element={
            <RestaurantList
              restaurants={restaurants}
              setRestaurants={setRestaurants}
            />
          }
        />
        {/* 맛집 상세 페이지에 대한 라우팅 */}
        <Route
          path="/restaurant/:id"
          element={
            <RestaurantDetail
              restaurants={restaurants}
              setRestaurants={setRestaurants}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
