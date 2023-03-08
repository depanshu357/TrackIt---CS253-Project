// import { Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import CurrentMonth from "./Components/CurrentMonth";
import History from "./Components/History";
import Profile from "./Components/Profile";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer/Footer";
import MonthSummary from "./Components/MonthSummary"

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/currentMonth" 
              element={user ? <MonthSummary /> : <Navigate to="/login" />} 
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
