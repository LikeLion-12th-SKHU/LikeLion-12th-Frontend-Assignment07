import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import JMT from "./JMT.json";

const App = () => {
  const [items, setItems] = useState([]); // 전역 상태 관리

  useEffect(() => {
    const itemsWithLikes = JMT.map((item) => ({ ...item, liked: false })); // 좋아요 상태 추가
    setItems(itemsWithLikes); // 전역 상태 업데이트
  }, []);

  const handleLikeToggle = (id, liked) => {
    const updatedItems = items.map(
      (
        item // 좋아요 상태 변경
      ) => (item.id === id ? { ...item, liked } : item)
    );
    setItems(updatedItems); // 전역 상태 업데이트
  };

  return (
    <div>
      <Outlet context={{ items, onLikeToggle: handleLikeToggle }} />{" "}
      {/* Outlet 컴포넌트(전역 상태 전달) */}
    </div>
  );
};

export default App;
