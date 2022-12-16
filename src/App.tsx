import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/AuthPanelComps/Register";
import Login from "./components/AuthPanelComps/Login";
import "./App.css";
import ForgotPassword from "./components/AuthPanelComps/forgotPassword/ForgotPassword";
import MainPanel from "./components/panels/MainPanel";
import HomePanel from "./components/panels/HomePanel";
import MyMusicsPanel from "./components/panels/MyMusicsPanel";
import SearchPanel from "./components/panels/SearchPanel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/panel" element={<MainPanel />}>
        <Route path="/panel/home" element={<HomePanel />} />
        <Route path="/panel/search" element={<SearchPanel />} />
        <Route path="/panel/my-musics" element={<MyMusicsPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
