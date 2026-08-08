import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" flex justify-between px-4 bg-green-500 py-6">
        <NavLink to="/" className="text-2xl">Mickey</NavLink>

        <div className=" flex gap-6">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Friends">Friends</NavLink>
        </div>
    </div>
  )
}

export default Navbar