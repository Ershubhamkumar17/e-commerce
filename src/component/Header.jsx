import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="logo">LASSIS</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/sale">Sale</Link>
        </nav>
        <div className="nav-icons">
          <span>♡</span>
          <Link to="login"><span>♙</span></Link>
    
         <Link to="/addtocart"> <span>🛒</span></Link>
        </div>
      </header>
    </>
  )
}

export default Header