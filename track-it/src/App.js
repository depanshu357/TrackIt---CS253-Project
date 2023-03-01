import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import CurrentMonth from './pages/currentmonth';
import History from './pages/history';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';
import Footer from './components/Footer/footer';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/current-month' element={<CurrentMonth />} />
        <Route path='/history' element={<History />} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
