import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Card from "./component/Card";
import Information from "./component/Information";
import data from "./JMT.json";
import useInput from "./hooks/useInput";

// App 컴포넌트 정의
const App = () => {
  const [restaurants, setRestaurants] = useState(data); // 레스토랑 데이터 상태 정의

  const search = useInput(""); // 검색 입력값을 관리하는 커스텀 훅 사용

  // 좋아요 상태를 업데이트하는 함수 정의
  const updateLike = (id) => {
    const updateRestaurants = restaurants.map((item) => {
      if (item.id === id) {
        return { ...item, liked: !item.liked };
      }
      return item;
    });

    setRestaurants(updateRestaurants); // 상태 업데이트
  };

  // 검색어와 일치하는 레스토랑 필터링
  const searchRestaurants = restaurants.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );

  return (
    <>
      <Router>
        <div>
          <input type="text" placeholder="맛집 검색" {...search} />{" "}
          {/* 검색 입력란 */}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {searchRestaurants.map((item) => (
                  <Card
                    name={item.name}
                    address={item.address}
                    imageUrl={item.imageUrl}
                    liked={item.liked}
                    updateLike={() => updateLike(item.id)} // 좋아요 상태 토글 함수 전달
                    id={item.id}
                  />
                ))}
              </div>
            }
          />
          <Route
            path="/:id"
            element={<Information restaurants={restaurants} />} // 상세 정보 페이지
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
