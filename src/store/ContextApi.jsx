import React, { useState,useEffect } from 'react'
import storedata from '../utils/ContextApi'
import { categories } from '../utils/product'


function ContextApi({ children }) {

  const [categoriesdata] = useState(categories);
  const [collectiondata, setCollectiondata] = useState([]);
  const [salesdata,setSalesdata] = useState([]);

  async function apiData() {
    try {
      const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");

      const data = await response.json();

      setCollectiondata(data);

    } catch (error) {
      console.log("collectiondata API Error:", error);
    }
  }

 async function salesData() {
 try{
     const res= await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
    const data = await res.json();
    setSalesdata(data);
 }
 catch (error) {
  console.log(" sales data API Error:", error);
 }
  }

  useEffect(() => {
    apiData();
    salesData();
  }, []);

  console.log("api data",collectiondata);
  return (
  <>
<storedata.Provider value={{categoriesdata ,collectiondata,salesdata}}>
    {children}
</storedata.Provider>
  </>
  )
}

export default ContextApi