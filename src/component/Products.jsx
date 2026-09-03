import React, { useContext, useRef } from "react";
import storedata from "../utils/ContextApi";

function Products() {
    const { categoriesdata } = useContext(storedata);

    const sliderRef = useRef(null);

    const left = () => {
        sliderRef.current.scrollLeft -= 300;
    };

    const right = () => {
        sliderRef.current.scrollLeft += 300;
    };

    return (
        <section className="section" id="Products">

            <div className="section-heading">
                <h2>Popular On The Beauty Store</h2>

                <div className="slider-btns">
                    <button onClick={left}>‹</button>
                    <button onClick={right}>›</button>
                </div>
            </div>

            <div className="products-grid" ref={sliderRef}>

                {categoriesdata?.map((product, index) => (

                    <div className="product-card" key={index}>

                        <div className="product-image">
                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <button className="wishlist">
                                ♡
                            </button>
                        </div>

                        <div className="product-details">

                            <h3>{product.name}</h3>

                            <p className="brand">
                                {product.brand}
                            </p>

                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span className="gray">★</span>

                                <small>
                                    ({product.reviews})
                                </small>
                            </div>

                            <p className="description">
                                {product.description}
                            </p>

                            <div className="price">
                            ₹{product.price}
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Products;