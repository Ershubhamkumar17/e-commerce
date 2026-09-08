import React, { useContext } from "react";
import storedata from "../utils/ContextApi";
import { categories } from "../utils/product";
function Collection() {
    const { collectiondata } = useContext(storedata);

    return (

        <>
            <div className="collection-page-container">
                <div className="left-section">
                    <div className="filter-sidebar">

                        <div className="filter-header">
                            <h2>Filters</h2>
                            <button className="filter-clear">
                                Clear All
                            </button>
                        </div>

                        {/* Category */}
                        <div className="filter-box">
                            <h3>Category</h3>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>Makeup</span>
                            </label>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>Skincare</span>
                            </label>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>Haircare</span>
                            </label>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>Fragrance</span>
                            </label>
                        </div>

                        {/* Brand */}
                        <div className="filter-box">
                            <h3>Brand</h3>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>Lakme</span>
                            </label>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>Maybelline</span>
                            </label>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>L'Oreal</span>
                            </label>

                            <label className="filter-item">
                                <input type="checkbox" />
                                <span>MAC</span>
                            </label>
                        </div>


                        {/* Price */}
                        {/* <div className="filter-box">
                    <h3>Price Range</h3>

                    <div className="price-inputs">
                        <input
                            type="number"
                            placeholder="Min"
                        />

                        <span> - </span>

                        <input
                            type="number"
                            placeholder="Max"
                        />
                    </div>
                </div> */}
                    </div>
                </div>
                <div className="right-section">
                    <div className="collection-page">

                        <div className="collection-product-grid">

                            {collectiondata.map((item) => (

                                <div
                                    className="collection-product-card"
                                    key={item.id}
                                >

                                    <img
                                        className="collection-product-image"
                                        src={item.image_link}
                                        alt={item.name}
                                    />

                                    <div className="collection-product-info">

                                        <h3 className="collection-product-name">
                                            {item.name}
                                        </h3>

                                        <p className="collection-product-price">
                                            $
                                            {item.price}
                                        </p>

                                        <button className="collection-add-btn">
                                            Add To Cart
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Collection;