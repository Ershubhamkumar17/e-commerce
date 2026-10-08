import React, { useContext, useState } from 'react'
import storedata from '../utils/ContextApi'

function AddtoCart() {
    const { cartItems, setCartItems } = useContext(storedata)

    const hadelquantityincriment = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                const PriceQuantity = { ...item, quantity: item.quantity + 1 };
                console.log("PriceQuantityz", PriceQuantity)
                return PriceQuantity

            }
            return item;
        });
        setCartItems(updatedCart);

    }
    const hadelquantitydicriment = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id && item.quantity > 1) {
                const decrementQuantity = { ...item, quantity: item.quantity - 1 };
                return decrementQuantity;
            }
            return item;
        });
        setCartItems(updatedCart);

    }


    return (
        <>
            <div className="cart-wrapper-x9">

                <div className="cart-heading-x9">
                    <h1>Shopping Cart</h1>
                    <p>3 Items in your cart</p>
                </div>

                <div className="cart-layout-x9">

                    <div className="cart-items-x9">

                        {
                            cartItems?.map((item, index) =>
                                <div className="cart-product-x9">

                                    <div className="cart-product-image-x9" key={index}>
                                        <img src={item.image_link} />
                                    </div>

                                    <div className="cart-product-info-x9">
                                        <h3>{item.name}</h3>
                                        <p>{item.mycategory}</p>

                                        <div className="cart-price-x9">
                                            ${item.price}
                                        </div>

                                        <div className="cart-actions-x9">

                                            <div className="cart-quantity-x9">
                                                <button onClick={() => hadelquantitydicriment(item.id)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => hadelquantityincriment(item.id)}>+</button>
                                            </div>

                                            <button className="cart-remove-x9">
                                                Remove
                                            </button>

                                        </div>
                                    </div>

                                </div>

                            )
                        }
                    </div>


                    <div className="cart-summary-x9">

                        <h2>Order Summary</h2>

                        <div className="summary-row-x9">
                            <span>Subtotal</span>
                            <span>$3,397</span>
                        </div>

                        <div className="summary-row-x9">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <div className="summary-row-x9">
                            <span>Discount</span>
                            <span>- $200</span>
                        </div>

                        <div className="summary-line-x9"></div>

                        <div className="summary-total-x9">
                            <span>Total</span>
                            <strong>$3,197</strong>
                        </div>

                        <button className="checkout-button-x9">
                            Proceed to Checkout
                        </button>

                        <button className="continue-shopping-x9">
                            Continue Shopping
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddtoCart