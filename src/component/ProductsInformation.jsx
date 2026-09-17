import React, { useContext, useState } from "react";
import storedata from "../utils/ContextApi";
import { useSearchParams } from "react-router-dom";

function ProductsInformation() {

    const { collectiondata,cartItems,setCartItems } = useContext(storedata);
    const [searchparams] = useSearchParams()
    const id = searchparams.get("id")
    const productInformetion = collectiondata.find((item) => item.id == id)

    const handaleAddtoCart = () => {
        setCartItems([...cartItems,productInformetion]);
    }

    return (
        <>
            <div className="product-container">

                {/* LEFT SIDE - PRODUCT IMAGE */}
                <div className="image-section">
                    <div className="product-image-box">

                        <div className="main-image">
                            <img
                                src={productInformetion?.image_link}
                                alt="Product"
                            />
                        </div>

                        <div className="image-buttons">
                            <button
                                className="add-cart-btn" onClick={handaleAddtoCart}

                            >
                                Add to Cart
                            </button>

                            <button
                                className="buy-btn"

                            >
                                Buy
                            </button>
                        </div>

                    </div>
                </div>


                {/* RIGHT SIDE - PRODUCT DETAILS */}
                <div className="product-details">

                    <h1>{productInformetion?.name}</h1>

                    {/* Rating */}
                    <div className="rating-section">
                        <span className="stars">⭐⭐⭐⭐☆</span>

                        <span className="reviews">
                            (150 Reviews)
                        </span>

                        <span className="stock">
                            In Stock
                        </span>
                    </div>


                    {/* Price */}
                    <p className="price">
                        ${productInformetion?.price}
                    </p>


                    {/* Description */}
                    <p className="description">
                        {productInformetion?.description}
                    </p>

                    {/* Quantity */}
                    <div className="quantity-section">

                        <button >
                            -
                        </button>

                        <p></p>

                        <button

                        >
                            +
                        </button>

                    </div>


                    {/* Buy Now */}
                    <div className="buy-now-section">

                        <button>
                            Buy Now
                        </button>

                    </div>


                    {/* Delivery */}
                    <div className="delivery-box">

                        <div className="delivery-item">

                            <span className="delivery-icon">
                                🚚
                            </span>

                            <div>
                                <p className="delivery-title">
                                    Free Delivery
                                </p>

                                <a href="#">
                                    Enter your postal code for Delivery Availability
                                </a>
                            </div>

                        </div>


                        <div className="delivery-item">

                            <span className="delivery-icon">
                                🔁
                            </span>

                            <div>

                                <p className="delivery-title">
                                    Return Delivery
                                </p>

                                <p>
                                    Free 30 Days Delivery Returns.
                                    {" "}
                                    <a href="#">
                                        Details
                                    </a>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductsInformation