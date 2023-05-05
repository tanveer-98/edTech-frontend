import React, { ReactNode , useEffect, useState } from "react";
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


const LazyAdminNavbar = React.lazy(() => import("./components/AdminNavbar"));

const LazyAdminHome = React.lazy(() => import("./components/AdminHome/AdminHome"));

const LazyAdminContent = React.lazy(() => import("./components/AdminContentPage/AdminContentPage"));

const LazyAdminNoticeBoard = React.lazy(() => import("./components/AdminNoticeBoard/AdminNoticeBoard"));
const LazyAdminLogin = React.lazy(() => import("./components/AdminLoginPage/AdminLoginPage"));





// idea is to have a single login page and a single register page
// ther first to register will be the admin
const Wrapper = ({ children }: { children: ReactNode }) => {
  return <React.Suspense>{children}</React.Suspense>;
};
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
      {/* <Route path="/admin/home" element={<AdminHome />} >
      <Route path="/admin/home/content" element={<AdminContentPage />} />
      <Route path="/admin/home/noticeboard" element={<AdminNoticeBoard />} />
      </Route>
      <Route path="/admin/register" element={<AdminRegisterPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />}></Route> */}

<Route
        path="/admin"
        element={
          <Wrapper>
            <LazyAdminNavbar />
          </Wrapper>
        }
      >
        <Route
          index
          element={
            <Wrapper>
              <LazyAdminHome />
            </Wrapper>
          }
        />

        <Route
          path="login"
          element={
            <Wrapper>
              <LazyAdminLogin />
            </Wrapper>
          }
        />
        <Route
          path="content"
          element={
            <Wrapper>
              <LazyAdminContent />
            </Wrapper>
          }
        />
        <Route
          path="noticeboard"
          element={
            <Wrapper>
              <LazyAdminNoticeBoard />
            </Wrapper>
          }
        />
        
      </Route>
    </Routes>
  );
}

export default App;
