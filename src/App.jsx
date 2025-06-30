import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GetInTouch from './components/GetInTouch';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import BlackTieInvites from './components/BlackTieInvites'
import BlackTieEvents from './components/BlackTieEvents';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/black-tie-invites" element={<BlackTieInvites />} />
        <Route path="/black-tie-events" element={<BlackTieEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
