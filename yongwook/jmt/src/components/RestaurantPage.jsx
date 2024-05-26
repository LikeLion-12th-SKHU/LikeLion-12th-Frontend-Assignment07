import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom"; // 전역 상태 관리, 중첩 라우팅(이전으로 돌아가기 등) 가능
import styled from "styled-components";
import useInput from "../hooks/useInput";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const StyledCard = styled.div`
  background-color: white;
  width: 28%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin-right: 1rem;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  h2 {
    font-size: 1.2rem;
    margin: 5px 0;
  }

  p {
    color: #666;
    margin: 10px 0;
  }
`;

const StyledLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 1rem;

  input {
    margin: 0 1rem;
    padding: 0.5rem;
    width: 30%;
    border: 1px solid #ddd;
  }

  button {
    color: white;
    background-color: green;
    margin: 10px;
    padding: 10px;
    border: 4px solid green;
    cursor: pointer;
  }
`;

const RestaurantPage = () => {
  const { items, onLikeToggle } = useOutletContext(); // 전역 상태 관리
  const { value: query, onChange: onChangeQuery } = useInput(""); // 검색어 입력
  const [searchItems, setSearchItems] = useState([]); // 검색 결과 저장
  const navigate = useNavigate(); // 중첩 라우팅

  useEffect(() => {
    setSearchItems(items);
  }, [items]);

  useEffect(() => {
    handleSearchBar(); // 검색어 입력 시 실시간 반영
  }, [query]);

  const handleSearchBar = () => {
    if (!query) {
      setSearchItems(items); // 검색어 비어 있을 시 전체 출력
      return;
    }

    const results = items.filter((item) => item.name.includes(query)); // 검색 결과 출력
    setSearchItems(results);
  };

  const handleCardClick = (id) => {
    // 카드 클릭 시 맛집으로 이동
    navigate(`/${id}`);
  };

  return (
    <div>
      <StyledInput>
        <input type="text" value={query} onChange={onChangeQuery} />{" "}
        {/* 검색바 */}
      </StyledInput>
      <div>
        {searchItems.map((item) => (
          <StyledWrapper key={item.id}>
            <StyledCard onClick={() => handleCardClick(item.id)}>
              {" "}
              <img src={item.imageUrl} alt={item.name} />
              <div className="intro">
                <h2>{item.name}</h2>
                <p>{item.address}</p>
              </div>
            </StyledCard>
            <StyledLike onClick={() => onLikeToggle(item.id, !item.liked)}>
              {item.liked ? "🤍" : "😵"}
            </StyledLike>
          </StyledWrapper>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
