import React from 'react'

function AllProducts() {
  return (
   <>
    <div className="product-card">

        <div className="product-image">
            <span className="discount">-25%</span>

            <img   src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                alt="Nike Shoes" />
        </div>

        <div className="product-content">

            <p className="category">Shoes</p>

            <h2>Nike Air Max Shoes</h2>

            <div className="rating">
                ⭐⭐⭐⭐⭐
                <span>(120)</span>
            </div>

            <div className="price">
                <span className="current-price">₹2,999</span>
                <span className="old-price">₹3,999</span>
            </div>

            <button className="cart-btn">
                🛒 Add to Cart
            </button>

        </div>

    </div>
   </>
  )
}

export default AllProducts