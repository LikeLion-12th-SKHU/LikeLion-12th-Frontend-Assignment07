import React, { useState, useEffect } from "react";
import FoodCard from "../components/FoodCard";
import useInput from "../hooks/useInput";
import styled from "styled-components";

// 컨테이너 스타일드 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 검색 입력창 스타일드 컴포넌트
const SearchInput = styled.input`
  padding: 8px;
  margin: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

// 음식 목록을 보여주는 컴포넌트
const FoodList = () => {
  const [foods, setFoods] = useState([]); // 음식 목록을 저장하는 상태와 해당 상태를 업데이트하는 함수
  const searchInput = useInput("");

  // 컴포넌트가 마운트될 때 음식 데이터를 가져와 상태에 저장
  useEffect(() => {
    fetch("/JMT.json")
      .then((response) => response.json())
      .then((data) => setFoods(data));
  }, []);

  // 좋아요 버튼을 토글하는 함수
  const toggleLike = (id) => {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
        food.id === id ? { ...food, liked: !food.liked } : food
      )
    );
  };

  const filteredFoods = foods.filter((food) =>
    food.name.includes(searchInput.value)
  );

  // 음식 목록과 검색 입력창을 렌더링
  return (
    <Container>
      <SearchInput placeholder="Search..." {...searchInput} />
      {filteredFoods.map((food) => (
        <FoodCard key={food.id} food={food} toggleLike={toggleLike} />
      ))}
    </Container>
  );
};

export default FoodList;
