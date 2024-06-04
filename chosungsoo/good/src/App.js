import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import RestaurantDetail from "./components/RestaurantDetail";
import JMT from "./JMT.json";

function App() {
  const [restaurants, setRestaurants] = useState(JMT);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Search restaurants={restaurants} setRestaurants={setRestaurants} />
          }
        />
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
