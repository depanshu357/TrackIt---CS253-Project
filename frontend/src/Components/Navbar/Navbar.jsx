import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./navbar.css"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <div className="navbar-outer">
      <div className="navbar-middle-links">
        <div>
          <a href="/">
            <img className="navbar-logo" src="./TrackITlogo.png" alt="logo" />
          </a>
        </div>
        {user && (
          <>
            <div className="navbar-inner">
              <Link to="/expenses" className="navbar-home">Expenses</Link>
              <Link to="/borrowings" className="navbar-home">Borrowings</Link>
              <Link to="/dashboard" className="navbar-home">Dashboard</Link>
            </div>
          </>
        )}
      </div>
      <div className="navbar-middle-logout">
        {!user && (
          <div>
            <Link to="/login" className="navbar-login-link">Login</Link>
            <Link to="/signup" className="navbar-signup-link">Signup</Link>

          </div>
        )}

        {user && (
          <span className="navbar-user-email" >

            <span>{user.email}</span>
            <button onClick={handleClick} className="navbar-logout-btn">Log out</button>
          </span>
        )
        }
      </div>










      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black m-0 p-0">
        <div className="container-fluid bg-black">
          <a className="main-page-links" href="/">
            TrackIt
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100"> */}
      {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li> */}
      {/* <li className="nav-item">
                <a className="nav-link" href="/currentMonth">
                  CurrentMonth
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/history">
                  History
                </a>
              </li>
              <li className="d-flex">
                <a href="/profile" className="nav-link">
                  Profile
                </a>
              </li> */}
      {/* <li>
                <a href="/login" className="nav-link">
                  Sign Out
                </a>
              </li> */}
      {/* {
        user && (

          <>
            <span className="nav-elements">
              <span>

                <Link to="/currentMonth" className="main-page-links" activeStyle>currentMonth </Link>
                <Link to="/history" className="main-page-links" activeStyle>History </Link>
                <Link to="/profile" className="main-page-links" activeStyle>Profile </Link>
                <Link to="/dashboard" className="main-page-links" activeStyle>Dashboard </Link>
                <Link to="/expenses" className="main-page-links" activeStyle>Expenses </Link>
                <Link to="/borrowings" className="main-page-links" activeStyle>Borrowings </Link>
                <Link to="/calenderMonth" className="main-page-links" activeStyle>CalenderMonth </Link>
              </span>
              <span >

                <span style={{ color: "white" }}>{user.email}</span>
                <button onClick={handleClick} className="logout-btn">Log out</button>
              </span>
            </span>
            <li className="nav-item active main-page-links">
              <a className="nav-link" href="#">Home <span class="sr-only main-page-links">Home</span></a>
            </li>
          </>
        )
      }
      {
        !user && (
          <div>
            <Link to="/login" className="main-page-links">Login</Link>
            <Link to="/signup" className="main-page-links">Signup</Link>

          </div>
        )
      }



    </ul >

          </div >
        </div >
      </nav >
  <Outlet /> */}
    </div >
  );
};

export default Navbar;
