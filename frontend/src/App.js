// import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CurrentMonth from "./Components/CurrentMonth";
import History from "./Components/History";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />}>
              {/* <Route path="/" element={<Navbar />}></Route> */}
              <Route path="/currentMonth" element={<CurrentMonth />}></Route>
              <Route path="/history" element={<History />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
