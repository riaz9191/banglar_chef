/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  console.log(user?.photoURL)
  // console.log(user?.email)

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

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
         { user && <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          </div>}
          {user?.email || user?.photoURL ? <div>
            <Link to='/'><button onClick={handleLogout} className="btn btnz ">Logout</button></Link>
          </div> :
          <div>
            <Link to='/login'><button className="btn btnz ">Login</button></Link>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
