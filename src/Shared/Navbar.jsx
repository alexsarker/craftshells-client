import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl md:text-2xl lg:text-3xl">
          Craftshells
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <div className="hidden lg:block">
          <Link
            to="/"
            className="link link-hover rounded-none text-base font-semibold text-[#6B7280] mr-12"
          >
            Home
          </Link>
          <Link
            to="/allItems"
            className="link link-hover rounded-none text-base font-semibold text-[#6B7280] mr-12"
          >
            All Items
          </Link>
          <Link
            to="/addItem"
            className="link link-hover rounded-none text-base font-semibold text-[#6B7280] mr-12"
          >
            Add Craft Item
          </Link>
          <Link
            to="/myList"
            className="link link-hover rounded-none text-base font-semibold text-[#6B7280] mr-12"
          >
            My List
          </Link>

          {!user && (
            <Link
              to="/login"
              className="link link-hover rounded-none text-base font-semibold text-[#6B7280] mr-12"
            >
              Login
            </Link>
          )}
        </div>
        <button>
          <MdOutlineDarkMode className="text-3xl mr-6"></MdOutlineDarkMode>
        </button>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  data-tooltip-place="bottom"
                >
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </a>
                <Tooltip id="my-tooltip"></Tooltip>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-base-100 w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    logOut();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <span>
            <Link
              to="/register"
              className="btn hover:btn-ghost back-main text-white rounded-none px-6"
            >
              Register
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
