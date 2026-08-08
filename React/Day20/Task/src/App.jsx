import { Routes , Route } from "react-router-dom"
import Home from "./Compnents/Home"
import Friends from "./Compnents/Friends"
import Navbar from "./Compnents/Navbar"


const App = () => {
  return (
    <div>

        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Friends" element={<Friends/>}/>
        </Routes>
    </div>
  )
}

export default App