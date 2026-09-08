import React, { useContext } from "react";
import storedata from "../utils/ContextApi";
function Sales() {
    const { salesdata } = useContext(storedata);
  return (
    <div className="sale-page">

      <div className="sale-page-heading">

        <p className="sale-page-small-title">
          LIMITED TIME OFFER
        </p>

        <h1 className="sale-page-title">
          Sale Up To 40% OFF
        </h1>

        <p className="sale-page-description">
          Grab your favorite beauty products at amazing prices.
        </p>

      </div>


      <div className="sale-product-grid">

        {salesdata.map((item) => (

          <div
            className="sale-product-card"
            key={item.id}
          >

            <span className="sale-discount-badge">
              {item.discount}
            </span>

            <img
              className="sale-product-image"
              src={item.image_link}
              alt={item.name}
            />

            <div className="sale-product-content">

              <h3 className="sale-product-name">
                {item.name}
              </h3>

              <div className="sale-product-price">

                <del className="sale-old-price">
                  {item.oldPrice}
                </del>

                <span className="sale-new-price">
                  {item.price}
                </span>

              </div>

              <button className="sale-shop-button">
                Shop Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Sales;