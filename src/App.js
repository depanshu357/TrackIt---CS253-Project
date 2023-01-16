// import { Routes } from "react-router-dom";
import {
	BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import CurrentMonth from "./Components/CurrentMonth";
import History from "./Components/History";
import Profile from "./Components/Profile";

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
      </Routes>
    </Router>
      </div></>
  );
}

export default App;
