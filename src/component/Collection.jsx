import React, { useContext } from "react";
import storedata from "../utils/ContextApi";
function Collection() {
    const { collectiondata } = useContext(storedata);

    return (

        <>
        <div cassName="collection-page-container">
            <div className="collection-page">

                <h1 className="collection-title">
                    Our Collection
                </h1>

                <p className="collection-subtitle">
                    Discover our latest beauty collection
                </p>

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
                <div className="filter-box">
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
                </div>


                {/* Rating */}
                <div className="filter-box">
                    <h3>Rating</h3>

                    <label className="filter-item">
                        <input type="checkbox" />
                        <span>★★★★★ 5.0</span>
                    </label>

                    <label className="filter-item">
                        <input type="checkbox" />
                        <span>★★★★☆ 4.0 & above</span>
                    </label>

                    <label className="filter-item">
                        <input type="checkbox" />
                        <span>★★★☆☆ 3.0 & above</span>
                    </label>
                </div>

            </div>

</div>
        </>
    );
}

export default Collection;