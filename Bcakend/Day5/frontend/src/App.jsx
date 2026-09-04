import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import New from "./Pages/New"

const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<New/>} path="/new"/>

      </Routes>
      
    </div>
  )
}

export default App