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

function RestaurantSearch({ restaurants, search, setSearch }) {
  return (
    <>
      <InputContainer
        type='text'
        value={search}
        onChange={setSearch}
      />

      <RestaurantListContainer>
        {restaurants
          .filter((restaurant) =>
            restaurant.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
      </RestaurantListContainer>
    </>
  );
}

function App() {
  const [search, setSearch] = useInput("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <RestaurantSearch
              restaurants={data}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path='/:id'
          element={<RestaurantDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
