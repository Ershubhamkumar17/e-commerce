import React from 'react'

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="logo">LASSIS</div>
 
        <nav>
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#sale">Sale</a>
          <a href="#categories">Categories</a>
          <a href="#store">Store</a>
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