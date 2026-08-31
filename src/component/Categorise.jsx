import React from 'react'
import { useContext } from 'react';
import storedata from "../utils/ContextApi";


function Categorise() {
    
  const { categoriesdata } = useContext(storedata)
  console.log(categoriesdata)
  return (
   <>
     {/* CATEGORIES */}
      <section className="section categories-section" id="categories">
         <h2 className="center-title">Shop By Categories</h2>

        <div className="categories">
          {categoriesdata.map((category, index) => (
            <div className="category-card" key={index}>
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div> 
      </section>
   </>
  )
}

export default Categorise