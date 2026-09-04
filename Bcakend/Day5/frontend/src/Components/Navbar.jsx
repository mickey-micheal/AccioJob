import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-blue-500 text-white">
        <div>
          <h1>Mickey Singh</h1> 
        </div>

        <div className="flex gap-5 px-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/new"}>New Task</Link>
        </div>

    </nav>
  )
}

export default Navbar