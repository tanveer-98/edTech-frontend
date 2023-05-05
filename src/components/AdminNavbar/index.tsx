import React, { useState, useEffect } from "react";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

import logo from "../../assets/logo.png";
import {
  selectLoadingLogin,
  selectVerified,
  signOut,
  verifyAdminJWTThunk,
} from "../../store/admin/adminSlice";

import { useAppSelector, useAppDispatch } from "../../store/index";
import BarIcon from "../shared/AnimatedBarIcon";
import { Button } from "../shared/Button";
import DarkModeButton from "../shared/DarkModeButton";
type I = object | void;
import { toggleScrollbar } from "../../store/members/membersSlice";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const darkMode = useAppSelector(selectDarkMode);
  const [hamIcon, setHamIcon] = useState(false);
  const toggleHam = () => {
    setHamIcon(!hamIcon);

    toggleScrollbar();
    // console.log("ham Icon toggled");
  };
  const dispatch = useAppDispatch();

  const handleToggleDarkMode = () => {
    // // console.log("Toggle called")
    dispatch(toggleDarkMode());
    window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));

  };
  const styles = {
    navlink: `${
      !hamIcon ? "bar-icon-close-navlink" : "bar-icon-open-navlink"
    } nav-link`,
  };
  const [retry, setRetry] = useState(0);
  const verifiedNav = useAppSelector(selectVerified);
  const [navRdtVerify, setNavRdtVerify] = useState(false);

  const location = useLocation();
  const loadingLogin = useAppSelector(selectLoadingLogin);
  useEffect(() => {
    if (location.pathname !== "/admin/login") {
      dispatch(verifyAdminJWTThunk(sessionStorage.getItem("jwtToken") || ""));
    }
  }, [retry]);
  useEffect(() => {
    if (loadingLogin === "rejected" && location.pathname !== "/admin/login") {
      setNavRdtVerify(true);
      navigate('/admin/login')
    }
    setRetry(retry + 1);
  }, [verifiedNav, loadingLogin]);
  return (
    <>

      <div className={`${darkMode ? "dark" : ""}`}>
        {/*  */}
        <header className="header bg-[#F1FFF8] dark:bg-[#002D13]">
          <div className="logo-name">
            <img src={logo} alt="trillio logo" className="logo" />
            <div className="party-name dark:text-white">
              Gana Suraksha Party
            </div>
          </div>
          <div className="hidden md:flex">
            <nav className=" page-nav">
              <div className="page-nav-link">
                <Link to="/admin">home</Link>
              </div>
              <div className="page-nav-link">
                <Link to="/admin/gallery">gallery</Link>
              </div>
              <div className="page-nav-link">
                <Link to="/admin/posts">posts</Link>
              </div>
              <div className="page-nav-link">
                <Link to="/admin/feed">feed</Link>
              </div>
              <div className="page-nav-link">
                <Link to="/admin/members">members</Link>
              </div>
              <div className="page-nav-link">
                <Link to="/admin/aboutUs">about us</Link>
              </div>
            </nav>
          </div>

          {/*
       //////////////////
       MOBILE NAVBAR
       ////////////////////
        */}

          {/* <div className={` w-screen`}> */}
          {/* <div className="md:hidden"> */}
          {/* ${hamIcon?"hidden":"flex flex-col justify-center"} */}

          <nav
            className={`
      ${!hamIcon ? "bar-icon-close-navlinks" : " bar-icon-open-navlinks "} 
      page-nav-mobile
      flex flex-col items-center justify-evenly overflow-hidden`}
          >
            <div onClick={toggleHam} className={styles.navlink}>
              <Link to="/admin">home</Link>
            </div>
            <div onClick={toggleHam} className={styles.navlink}>
              <Link to="/admin/gallery">gallery</Link>
            </div>
            <div onClick={toggleHam} className={styles.navlink}>
              <Link to="/admin/posts">posts</Link>
            </div>
            <div onClick={toggleHam} className={styles.navlink}>
              <Link to="/admin/feed">feed</Link>
            </div>
            <div onClick={toggleHam} className={styles.navlink}>
              <Link to="/admin/members">members</Link>
            </div>
            <div onClick={toggleHam} className={styles.navlink}>
              <Link to="/admin/aboutUs">about us</Link>
            </div>
          </nav>
          {/* </div> */}

          {!verifiedNav ? (
            <div className="btn-group">
              <Button className="btn login">
                <Link to="login">Log In</Link>
              </Button>
            </div>
          ) : null}
          {verifiedNav ? (
            <div className="btn-group">
              <Button
                className="btn login"
                onClick={() => {
                  dispatch(signOut());
                  navigate("/admin/login");
                }}
              >
                Sign Out
              </Button>
            </div>
          ) : null}
          <div className="flex items-center">
            <DarkModeButton toggler={handleToggleDarkMode} />
          </div>
          <div className="bar-icon md:hidden">
            <BarIcon
              onClick={() => toggleHam()}
              className={`${hamIcon ? "open" : ""}`}
            />
          </div> 
          {/* <ToggleSlider
      onToggle = {handleToggleDarkMode}
    //   barStyles={
    //     {
    //         backgroundColor:"red"
    //     }
    //   }
    barBackgroundColor = "#b0b0b0"
    barBackgroundColorActive='#141414'
      /> */}
        </header>
      </div>
      <Outlet />
    </>
  );
};

export default AdminNavbar;
