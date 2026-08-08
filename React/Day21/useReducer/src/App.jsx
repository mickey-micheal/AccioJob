import {Routes, Route, Link } from "react-router-dom"
import UseReducerdamo from "./Components/useReducerdamo"
import  Form  from "./Components/Form"

const App = () => {
  return (
    <div>

      <nav>
        <Link to="/UseReducerdamo">UseReducer</Link>
        <br />
        <Link to="/Form">From</Link>
      </nav>
      

      <Routes>
        <Route path="/UseReducerdamo" element={<UseReducerdamo/>}/>
        <Route path="/From" element={<Form/>}/>
      </Routes>

    </div>
  )
}

export default App