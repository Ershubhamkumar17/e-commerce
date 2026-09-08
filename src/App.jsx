import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './peges/Home'
import Header from './component/Header'
import Products from './component/Products'
import Footer from './component/Footer'
import Collection from './component/Collection'
import Sales from './component/Sales'
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
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
