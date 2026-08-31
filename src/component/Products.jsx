import React from 'react'
import { useContext } from 'react';
import storedata from "../utils/ContextApi";

function Products() {
          const { categoriesdata } = useContext(storedata)
      console.log(categoriesdata)
    return (
        <>
            {/* PRODUCTS */}
            <section className="section" id="collection">
                <div className="section-heading">
                    <h2>Popular On The Beauty Store</h2>

                    <div className="slider-btns">
                        <button>‹</button>
                        <button>›</button>
                    </div>
                </div>
{/* 
                <div className="products-grid">
                    {categoriesdata.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
                </div> */}
            </section>
        </>
    )
}

export default Products