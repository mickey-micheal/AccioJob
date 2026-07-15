import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">

      <div className="max-w-8xl mx-auto flex items-center justify-between h-20 px-8">

        <Link to="/">
          <img
            className="h-16 w-auto object-contain hover:scale-105 transition duration-300"
            src="../../public/bro-mugon-1.png"
            alt="Logo"
          />
        </Link>

        <div className="flex items-center gap-8 text-lg font-medium">

          <NavLink
            to="/Products"
            className={({ isActive }) =>
              `transition duration-300 hover:text-green-600 ${
                isActive
                  ? "text-green-600 font-bold border-b-2 border-green-600 pb-1"
                  : "text-gray-700"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/Cart"
            className={({ isActive }) =>
              `transition duration-300 hover:text-green-600 ${
                isActive
                  ? "text-green-600 font-bold border-b-2 border-green-600 pb-1"
                  : "text-gray-700"
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/Profile"
            className={({ isActive }) =>
              `transition duration-300 hover:text-green-600 ${
                isActive
                  ? "text-green-600 font-bold border-b-2 border-green-600 pb-1"
                  : "text-gray-700"
              }`
            }
          >
            Profile
          </NavLink>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;