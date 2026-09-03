import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="logo">LASSIS</div>
 
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/sale">Sale</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">Products</Link>
        </nav>

        <div className="nav-icons">
          <span>⌕</span>
          <span>♡</span>
          <span>♙</span>
          <span>🛒</span>
        </div>
      </header>
    </>
  )
}

export default Header