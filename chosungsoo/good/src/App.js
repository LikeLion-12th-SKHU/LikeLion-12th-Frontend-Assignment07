import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import RestaurantDetail from "./components/RestaurantDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainComponent />} />
        <Route path="/:id" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
