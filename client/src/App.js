import React, {useState} from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

// components
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    <Router>
      <div className="container">
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashbaord" />}/>
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/login" />}/>
        <Route path="/dashboard" element={isAuthenticated ?<Dashboard /> : <Navigate to="/login"/>}/>
      </Routes>
      </div>

    </Router>
    </>
  );
}

export default App;
