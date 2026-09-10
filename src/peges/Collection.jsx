import React, { useState, useContext, useEffect } from "react";
import storedata from "../utils/ContextApi";
import { Link } from "react-router-dom";
function Collection() {
    const [filteredcategoryProducts, setFilteredcategoryProducts] = useState([]);
    const { collectiondata } = useContext(storedata);

    useEffect(() => {
        setFilteredcategoryProducts(collectiondata);
    }, [collectiondata]);

    const handaleCategarymakeupfiltter = (e) => {
        const selectedmakeupCategory = e.target.value;
        const filteredmakeupProducts = collectiondata.filter((product) => product.mycategory === selectedmakeupCategory);
        setFilteredcategoryProducts(filteredmakeupProducts);
    };

        const handaleskineCategaryfiltter = (e) => {
            setFilteredcategoryProducts("");
        const selectedskineCategory = e.target.value;
        const filteredskineProducts = collectiondata.filter((product) => product.mycategory === selectedskineCategory);
        setFilteredcategoryProducts(filteredskineProducts);
    };

          const handaleHaircareCategaryfiltter = (e) => {
              setFilteredcategoryProducts("");
        const selectedHaircareCategory = e.target.value;
        const filteredHaircareProducts = collectiondata.filter((product) => product.mycategory === selectedHaircareCategory);
        setFilteredcategoryProducts(filteredHaircareProducts);
    };
          const handaleFragranceCategaryfiltter = (e) => {
              setFilteredcategoryProducts("");
        const selectedFragranceCategory = e.target.value;
        const filteredFragranceProducts = collectiondata.filter((product) => product.mycategory === selectedFragranceCategory);
        setFilteredcategoryProducts(filteredFragranceProducts);
    };



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
                                <input
                                    type="radio"
                                    name="category"
                                    value="Makeup"
                                    onChange={handaleCategarymakeupfiltter}
                                />
                                <span>Makeup</span>
                            </label>

                            <label className="filter-item">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Skincare"
                                    onChange={handaleskineCategaryfiltter}
                                />
                                <span>Skincare</span>
                            </label>

                            <label className="filter-item">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Haircare"
                                    onChange={handaleHaircareCategaryfiltter}
                                />
                                <span>Haircare</span>
                            </label>

                            <label className="filter-item">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Fragrance"
                                    onChange={handaleFragranceCategaryfiltter}
                                />
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

                            {filteredcategoryProducts?.map((item,index) =>
                             <Link to={`/productinformation/?id=${item.id}`}>
                            (

                                <div
                                    className="collection-product-card"
                                    key={index}
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
                                

                            )
                            </Link>
                            )

                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Collection;