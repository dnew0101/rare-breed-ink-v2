import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import BookingInfo from '../pages/BookingInfo';
import Aftercare from '../pages/Aftercare';
import AvailableDesigns from '../pages/AvailableDesigns';
import About from '../pages/About';

//App's router function; contains all potential endpoints for SPA
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aftercare" element={<Aftercare />} />
        <Route path="/availabledesigns" element={<AvailableDesigns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookingInfo />} />
      </Routes>  
    </Router>
  )
}