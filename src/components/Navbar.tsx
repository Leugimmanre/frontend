import { NavLink, Link } from "react-router-dom";
import { menuItems } from "../data/Menu";

export default function Navbar() {
  const login = true;

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full lg:w-3/4 px-6 pb-10 pt-20 mx-auto bg-slate-100">
      <nav className="flex flex-col lg:flex-row justify-center lg:justify-start space-x-0 lg:space-x-4 space-y-2 lg:space-y-0 mb-4 lg:mb-0">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `px-5 py-2 text-lg font-medium ${
                isActive ? "text-white bg-indigo-500" : "text-black hover:text-gray-800"
              } rounded-lg lg:rounded ${
                isActive ? "rounded-none text-center" : "hover:rounded-md text-center"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-end space-y-4 lg:space-x-6 lg:space-y-0 text-center">
        <div className="text-black">Miguel</div>
        <Link
          className="bg-indigo-500 w-full rounded-none hover:bg-indigo-700 text-white font-bold py-2 px-4 lg:rounded-md"
          to="/"
        >
          {login ? "Logout" : "Login"}
        </Link>
      </div>
    </div>
  );
}
