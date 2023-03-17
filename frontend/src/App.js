// import { Routes } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import MonthSummary from "./Components/MonthSummary";
import DailySummary from "./Components/DailySummary";
import Expenses from "./Components/Expenses";
import Borrowings from "./Components/Borrowings";
import CalendarMonth from "./Components/calendarMonth";
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

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>

        <div className="pages">
          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
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
              element={user ? <div><Navbar /><CalendarMonth /></div> : <Navigate to="/login" />}
            />
            {/* <Route
              path="/seller"
              element={<Seller />}
            /> */}
            <Route
              path="/"
              element={user ? <div><Navbar /><Home /></div> : <Navigate to="/login" />}
            />

            <Route
              path="/monthSummary"
              element={user ? <div><Navbar /><MonthSummary /></div> : <Navigate to="/login" />}
            />
            <Route
              path="/borrowings"
              element={user ? <div><Navbar /><CalendarYear /></div> : <Navigate to="/login" />}
            />

            <Route
              path="/dailySummary"
              element={user ? <div><Navbar /><DailySummary /></div> : <Navigate to="/login" />}

            />
            <Route
              path="/dashboard"
              element={user ? <div><Navbar /><Dashboard /></div> : <Navigate to={"/login"} />}
            />
            <Route
              path="/profile"
              element={user ? <div><Navbar /><Profile /></div> : <Navigate to="/login" />}
            />
            <Route
              path="/history"
              element={user ? <div><Navbar /><History /></div> : <Navigate to="/login" />}
            />

            <Route
              path="/add-expense"
              element={<CurrentMonth />}
            />

          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter >
    </div >
  );
}

export default App;
