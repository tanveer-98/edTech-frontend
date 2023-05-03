import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar/Navbar";
import HeroRight from "./components/HeroRight/HeroRight";
import HeroLeft from "./components/HeroLeft/HeroLeft";
import Hero from "./components/Hero/Hero";
import { selecttoggleNav, toggleToggleNav } from "./store/globals/globalsSlice";
import { useAppDispatch, useAppSelector } from "./store/index";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import { Blocks } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";
import DriveRedirectPage from "./components/DriveRedirectPage/DriveRedirectPage";
import AdminLoginPage from "./components/AdminLoginPage/AdminLoginPage";
import AdminContentPage from "./components/AdminContentPage/AdminContentPage";
// idea is to have a single login page and a single register page
// ther first to register will be the admin

import AdminHome from "./components/AdminHome/AdminHome";
import AdminRegisterPage from "./components/AdminRegisterPage/AdminRegisterPage";
import AdminNoticeBoard from "./components/AdminNoticeBoard/AdminNoticeBoard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/download" element={<DriveRedirectPage />} />
      <Route path="/admin/home" element={<AdminHome />} >
      <Route path="/admin/home/content" element={<AdminContentPage />} />
      <Route path="/admin/home/noticeboard" element={<AdminNoticeBoard />} />
      </Route>
      <Route path="/admin/register" element={<AdminRegisterPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />}></Route>
    </Routes>
  );
}

export default App;
