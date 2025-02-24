import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import LogIn from "./components/Pages/LogIn";
import Welcome from "./components/Pages/Welcome";
import Header from "./components/layouts/Header";
import { BrowserRouter, Route, Routes } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Welcome" element={<Welcome/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
