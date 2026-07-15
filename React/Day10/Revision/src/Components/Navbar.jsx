import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <h1>Mickey</h1>

        <div>

            <Link to={"/home"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/about"}>About</Link>

        </div>
    </div>
  )
}

export default Navbar