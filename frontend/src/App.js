// import { Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import MonthSummary from "./Components/MonthSummary";
import DailySummary from "./Components/DailySummary";
import Expenses from "./Components/Expenses";
import Borrowings from "./Components/Borrowings";
import CalendarMonth from "./Components/calendarMonth";

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
import Footer from "./Components/Footer/Footer";
// import MonthSummary from "./pages/MonthSummary"
import CurrentMonth from "./pages/CurrentMonth";

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/calenderMonth"
              element={user ? <CalendarMonth /> : <Navigate to="/login" />}
            />
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />

            <Route
              path="/monthSummary"
              element={user ? <MonthSummary /> : <Navigate to="/login" />}
            />
            <Route
              path="/borrowings"
              element={user ? <Borrowings /> : <Navigate to="/login" />}
            />
            <Route
              path="/expenses"
              element={user ? <Expenses /> : <Navigate to="/login" />}
            />
            <Route
              path="/dailySummary"
              element={user ? <DailySummary /> : <Navigate to="/login" />}

            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/history"
              element={user ? <History /> : <Navigate to="/login" />}
            />
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
