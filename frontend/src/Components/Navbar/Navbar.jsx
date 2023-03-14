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
            <img className="navbar-logo" src="/images/TrackIT-logo-bgrm.png" alt="logo" />
          </a>
        </div>
        {user && (
          <>
            <div className="navbar-inner">
              {user.userType=="Customer" && <Link to="/expenses" className="navbar-home">Expenses</Link>}
              {user.userType=="Customer" && <Link to="/borrowings" className="navbar-home">Borrowings</Link>}
              {user.userType=="Customer" && <Link to="/dashboard" className="navbar-home">Dashboard</Link>}
            </div>
            <button className="navbar-dropdown-btn">
  <i class="fa fa-caret-down"></i>
</button>
<div className="navbar-dropdown-menu">
{user.userType=="Customer" && <Link to="/expenses" className="navbar-home">Expenses</Link>}
              {user.userType=="Customer" && <Link to="/borrowings" className="navbar-home">Borrowings</Link>}
              {user.userType=="Customer" && <Link to="/dashboard" className="navbar-home">Dashboard</Link>}
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
    </div >
  );
};

export default Navbar;
