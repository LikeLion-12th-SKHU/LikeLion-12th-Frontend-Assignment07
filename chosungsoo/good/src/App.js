import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainComponent";
import RestaurantDetailPage from "./components/RestaurantDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/:id" element={<RestaurantDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
