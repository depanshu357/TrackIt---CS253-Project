// import { Routes } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MonthSummary from "./Components/MonthSummary";
import DailySummary from "./Components/DailySummary";
//import Expenses from "./Components/Expenses";
import Borrowings from "./Components/Borrowings";
import CalendarMonth from "./Components/calendarMonth";
import CalendarYear from "./Components/calendarYear";
import Seller from "./Components/seller";


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
import Navbar from './Components/Navbar/Navbar.js';

import Analytics from './components/Analytics';
import Cards from './components/Cards';
import lFooter from './components/lFooter';
import Hero from './components/Hero';
import lNavbar from './components/lNavbar';
import Calendarm from './components/calendar';
import ListExpenses from './components/ListExpenses';
import ListBorrowings from './components/ListBorrowings';
import DayChart from './components/daydonut';
import Expenses from './components/expenses';

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
              path="/landing"
              element={<div>
            <Navbar />
            <Hero />

            <Analytics />
            <MonthSummary />
            <Cards />
            <Footer />
            </div> }
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
              element={user ? <Navbar Display={CalendarMonth} /> : <Navigate to="/login" />}
            />
            {/* <Route
              path="/seller"
              element={<Seller />}
            /> */}
            <Route
              path="/"
              element={user ? <Navbar Display={Home} /> : <Navigate to="/login" />}
            />

            <Route
              path="/monthSummary"
              element={user ? <Navbar Display={MonthSummary} /> : <Navigate to="/login" />}
            />
            <Route
              path="/borrowings"
              element={user ? <Navbar Display={CalendarYear} /> : <Navigate to="/login" />}
            />

            <Route
              path="/dailySummary"
              element={user ? <Navbar Display={DailySummary} /> : <Navigate to="/login" />}

            />
            <Route
              path="/dashboard"
              element={user ? <Navbar Display={Dashboard} /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/profile"
              element={user ? <Navbar Display={Profile} /> : <Navigate to="/login" />}
            />
            <Route
              path="/history"
              element={user ? <Navbar Display={History} /> : <Navigate to="/login" />}
            />

            <Route
              path="/add-expense"
              element={<CurrentMonth />}
            />
            <Route path="/temp" element={<Navbar Display={CalendarMonth} />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter >
    </div >
  );
}

export default App;
