import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './peges/Home'
import Header from './component/Header'
import Products from './component/Products'
import Footer from './component/Footer'
import Collection from './peges/Collection'
import Sales from './peges/Sales'
import ProductsInformation from'./component/ProductsInformation'
import AddtoCart from './component/AddtoCart'
import Rajistration from './peges/Rajistration'
import Login from './peges/Login'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/sale" element={<Sales />} />
          <Route path="/productinformation" element={<ProductsInformation />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/rajistration" element={<Rajistration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
