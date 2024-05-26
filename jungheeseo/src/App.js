import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantCard from "./components/Card";
import RestaurantDetail from "./components/RestaurantDetail";
import useInput from "./useInput";
import data from "./JMT.json";
import styled from "styled-components";

const InputWrapper = styled.div`
  text-align: center;
  margin: 20px;

  & input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    border: 1px solid black;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding: 16px;
`;

function Main({ restaurants, search, setSearch }) {
  return (
    <>
      {/* 검색창 input 태그를 렌더링*/}
      <InputWrapper>
        <input
          type="text"
          value={search}
          onChange={setSearch} // 검색어 상태를 업데이트하는 함수를 연결
        />
      </InputWrapper>
      {/* 맛집 카드를 렌더링 */}
      <AppWrapper>
        {restaurants
          .filter((restaurant) => restaurant.name.includes(search)) // 검색과 일치하는 맛집만 필터링
          .map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            // 맛집 카드 렌더링
          ))}
      </AppWrapper>
    </>
  );
}

function App() {
  const [search, setSearch] = useInput(""); // useInput 훅 사용하여 검색 상태를 관리

  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 루트를 설정 */}
        <Route
          path="/"
          element={
            <Main
              restaurants={data} // 전체 맛집 데이터를 메인 컴포넌트에 전달
              search={search} // 검색어를 메인 컴포넌트에 전달
              setSearch={setSearch}
            /> // 검색어 업데이트를 메인 컴포넌트에 전달
          }
        />
        {/* 맛집 상세 페이지의 루트를 설정 */}
        <Route path="/:id" element={<RestaurantDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
