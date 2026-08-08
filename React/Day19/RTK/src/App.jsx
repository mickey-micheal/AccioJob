import { Routes, Route} from "react-router-dom"
import Home from "./Compnents/Home"
import Favourite from "./Compnents/Favourite"
import Nvabar from "./Compnents/Nvabar"

const App = () => {
  return (
    <div>

        <Nvabar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Favourite" element={<Favourite/>}/>
        </Routes>
        
    </div>
  )
}

export default App