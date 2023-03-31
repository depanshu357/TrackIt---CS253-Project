// import { Routes } from "react-router-dom";
// import  from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CalendarMonth from "./Components/CalenderMonth/calendarMonth";
// import CalendarYear from "./Components/calendarYear";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Forget_Password from "./pages/Forget_Password";
// import CurrentMonth from "./pages/CurrentMonth";
import Navbar from "./Components/Navbar/Navbar.js";

import Features from "./Components/Features";
import Cards from "./Components/Cards";
import Hero from "./Components/Hero";
import LNavbar from "./Components/Navbar";
import AddExpense from "./Components/AddExpense";
import Borrowings from "./pages/Borrowings";
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
                !user ?
                  <div style={{ backgroundColor: 'black' }}>
                    <LNavbar />
                    <Hero />
                    <Features />
                    <Cards />
                    {/* <Footer /> */}
                  </div> :
                  <Navigate to="/" />
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
            <Route
              path="/"
              element={
                user ? <Navbar Display={Home} showPopup={showPopup} setShowPopup={setShowPopup} /> : <Navigate to="/landing" />
              }
            />
            <Route
              path="/borrowings"
              element={
                user ? (
                  <Navbar Display={Borrowings} showPopup={showPopup} setShowPopup={setShowPopup} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/analytics"
              element={
                user ? (
                  <Navbar Display={Dashboard} showPopup={showPopup} setShowPopup={setShowPopup} />
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />


          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
