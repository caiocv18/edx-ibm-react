import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🌿 PlantShop
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}
          >
            Produtos
          </Link>
          <Link 
            to="/cart" 
            className={location.pathname === '/cart' ? 'nav-link cart-link active' : 'nav-link cart-link'}
          >
            <span className="cart-icon">🛒</span>
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
            Carrinho
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 