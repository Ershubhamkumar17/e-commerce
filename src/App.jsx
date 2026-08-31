import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './peges/Home'
import Header from './component/header';
function App() {

  return (
    <>
    <Header/>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
       </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App
