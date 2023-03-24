// import { Routes } from "react-router-dom";
// import  from 'react'
import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MonthSummary from "./Components/MonthSummary";
import DailySummary from "./Components/DailySummary";
//import Expenses from "./Components/Expenses";
import Borrowings from "./Components/Borrowings";
// import CalendarMonth from "./Components/CalenderMonth.css/calendarMonth";
import CalendarMonth from "./Components/CalenderMonth/calendarMonth";
import CalendarYear from "./Components/calendarYear";
// import Seller from "./Components/Seller";

import History from "./Components/History";
import Profile from "./Components/Profile";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Forget_Password from "./pages/Forget_Password";
// import MonthSummary from "./pages/MonthSummary"
import CurrentMonth from "./pages/CurrentMonth";
import ExpenseForm from "./Components/ExpenseForm";
import Navbar from "./Components/Navbar/Navbar.js";

import Analytics from "./Components/Analytics";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import LNavbar from "./Components/Navbar";
import AddExpense from "./Components/AddExpense";

function App() {
  const { user } = useAuthContext();
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = (e) => {
    e.preventDefault();
    console.log(e);
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          {showPopup && (
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: "5",
              }}
            >
              <AddExpense setShowPopup={setShowPopup} showPopup={showPopup} />
            </div>
          )}
          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />

            <Route
              path="/landing"
              element={
                <div>
                  <LNavbar  />
                  <Hero />

                  <Analytics />
                  <MonthSummary />
                  <Cards />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/Forget_Password"
              element={!user ? <Forget_Password /> : <Navigate to="/" />}
            />
            <Route
              path="/expenses"
              element={
                user ? (
                  <Navbar Display={CalendarMonth} showPopup={showPopup} setShowPopup={setShowPopup} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            {/* <Route
              path="/seller"
              element={<Seller />}
            /> */}
            <Route
              path="/"
              element={
                user ? <Navbar Display={Home} showPopup={showPopup} setShowPopup={setShowPopup} /> : <Navigate to="/login" />
              }
            />
            {/* <Route
              path="/outside-home"
              element={<div><Navbar2/> <Hero/><Analytics/> </div>}
            /> */}

            <Route
              path="/monthSummary"
              element={
                user ? (
                  <Navbar Display={MonthSummary} showPopup={showPopup} setShowPopup={setShowPopup} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/borrowings"
              element={
                user ? (
                  <Navbar Display={CalendarYear} showPopup={showPopup} setShowPopup={setShowPopup} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/dailySummary"
              element={
                user ? (
                  <Navbar Display={DailySummary} showPopup={showPopup} setShowPopup={setShowPopup} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                user ? (
                  <Navbar Display={Dashboard} showPopup={showPopup} setShowPopup={setShowPopup} />
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />
            <Route
              path="/profile"
              element={
                user ? <Navbar Display={Profile} showPopup={showPopup} setShowPopup={setShowPopup} /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/history"
              element={
                user ? <Navbar Display={History} showPopup={showPopup} setShowPopup={setShowPopup} /> : <Navigate to="/login" />
              }
            />

            <Route path="/add-expense" element={<CurrentMonth />} />
            <Route path="/temp" element={<Navbar Display={CalendarMonth} showPopup={showPopup} setShowPopup={setShowPopup} />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
