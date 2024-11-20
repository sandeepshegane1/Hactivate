import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Request from './pages/Request';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        <Navbar 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/donate" 
            element={isLoggedIn ? <Donate /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/request" 
            element={isLoggedIn ? <Request /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} />} 
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;