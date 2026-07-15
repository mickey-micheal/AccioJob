import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import Profile from "./Pages/Profile"
import Lending from "./Components/Lending"
import { useState } from "react"

const App = () => {

  const [cart , setcart] = useState([])



  return (

    <div>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Lending/>}/>
        <Route path="/products" element={<Products cart={cart} setcart={setcart}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    
    </div>
  )
}

export default App