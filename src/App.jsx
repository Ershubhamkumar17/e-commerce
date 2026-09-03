import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './peges/Home'
import Header from './component/Header'
import Categorise from './component/Categorise'
import Products from './component/Products'
function App() {

  return (
    <>
       <BrowserRouter>
    <Header/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
         <Route path="/categories" element={<Categorise/>}/>
          <Route path="/products" element={<Products/>}/>
       </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App
