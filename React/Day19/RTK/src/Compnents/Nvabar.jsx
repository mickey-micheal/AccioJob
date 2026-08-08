import {NavLink} from "react-router-dom"

function Nvabar() {
  return (
    <div className="flex justify-between px-5 bg-blue-500 py-7">

        <h1 className="text-2xl">Mickey</h1>

        <div className="flex gap-5">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/Favourite">Favourite</NavLink>
            
        </div>
    </div>
  )
}

export default Nvabar