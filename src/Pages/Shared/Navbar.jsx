import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mx-auto  sticky top-0 z-50">
      <div className="navbar bg-base-100 flex justify-between">
        <div className=" ">
          <a className="btn btn-ghost normal-case text-xl">
            Banglar<span className="text-red-600 ms-1"> Chef</span>
          </a>
        </div>
        <div>
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
                to="/applied"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About Us
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" />
              </div>
            </label>
          </div>
          <div>
            <button className="btn btnz ">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
