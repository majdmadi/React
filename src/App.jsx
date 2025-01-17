import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Feedback from './components/Feedback';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
