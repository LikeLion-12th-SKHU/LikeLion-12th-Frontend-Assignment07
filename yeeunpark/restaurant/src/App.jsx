import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import data from "./JMT.json";
import useInput from "./hooks/useInput";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantDetail from "./components/RestaurantDetail";

const InputContainer = styled.input`
  width: 450px;
  border: 1px solid #bbb;
  border-radius: 10px;
  text-align: left;
  margin-left: 70px;
  margin-top: 35px;
  padding: 10px;
  font-size: 15px;
`;

const RestaurantListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
`;

function App() {
  const [search, setSearch] = useInput("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' //초기 화면 RestaurantSearch 렌더링
          element={
            <RestaurantSearch
              restaurants={data}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path='/:id' //아이디에 맞는 식당의 디테일 페이지로 이동
          element={<RestaurantDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function RestaurantSearch({ restaurants, search, setSearch }) {
  return (
    <>
      <InputContainer
        type='text'
        value={search} //현재 값
        onChange={setSearch} //입력 상태가 변경되면 setSearch를 호출해 상태 업데이트
      />

      <RestaurantListContainer>
        {restaurants
          .filter(
            (restaurant) =>
              restaurant.name.toLowerCase().includes(search.toLowerCase()) //검색된 식당 이름 필터링
          )
          .map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant} //RestaurantCard에 식당 데이터 전달
            />
          ))}
      </RestaurantListContainer>
    </>
  );
}

export default App;
