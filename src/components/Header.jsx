import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/Header.css';

function Header() {
  const { cart } = useContext(CartContext); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Shop</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart ({cart.length}) 
            </Link>
          </li>
          <li>
            <a href="#" onClick={handleLogout} className="logout-btn">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;