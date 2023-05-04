/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  // console.log(user?.email)

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" mx-auto  sticky top-0 z-50 ">
      <div className="navbar bg-base-100 bg-opacity-80 flex justify-between my-containerr">
        <div className=" ">
          <Link to="/">
            <p className="btn btn-ghost normal-case text-xl">
              Banglar<span className="text-red-600 ms-1"> Chef</span>
            </p>
          </Link>
        </div>
        <div>
          <div>
            <div className=" block lg:hidden">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32 p-3"
                >
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/applied"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Error
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="">
            <ul className="items-center space-x-8 hidden lg:flex">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
              <NavLink
                to="/error"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
               Error
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="flex-none">
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} title={user.displayName} />
                </div>
              </label>
            </div>
          )}
          {user?.email || user?.photoURL ? (
            <div>
              <Link to="/">
                <button onClick={handleLogout} className="btn btnz ">
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn btnz ">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
