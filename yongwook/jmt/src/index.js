import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter: 브라우저에서 사용할 라우터, Routes: 라우트들을 감싸는 컴포넌트, Route: 라우트를 정의하는 컴포넌트
import App from "./App";
import RestaurantPage from "./components/RestaurantPage";
import RestaurantRead from "./components/RestaurantRead";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {" "}
          {/* Outlet 컴포넌트를 사용하는 라우트 */}
          <Route path="/" element={<RestaurantPage />} /> {/* 중첩 라우팅 */}
          <Route path="/:id" element={<RestaurantRead />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
