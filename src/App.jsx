import React , {useState,useEffect}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetails';
import Cart from './pages/Cart';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoutes';
import "./App.css"

function App() {
   //const isLoggedIn = !!localStorage.getItem('token'); // checks if token exists
  const [token,setToken]= useState(null);
  console.log(localStorage.getItem('token'));

  useEffect(()=>{
  const storedToken = localStorage.getItem('token');
  setToken(storedToken);
  },[]);

  return (
    <Router>
     
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
         
        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        <Route path="/product/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        
      </Routes>
    </Router>
  );
}

export default App;