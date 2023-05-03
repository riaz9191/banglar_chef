import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { AiFillWarning } from "react-icons/ai";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (password.length < 6) {
      // console.log('pass need 6')
      setErr("Passwords must be at least 6 characters");
    } else {
      setErr("");
    }
    if ((name,email, password)) {
      registerUser( email, password)
        .then((res) => {
          // Signed in
          const user = res.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-4 mt-8">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-500 ps-3 flex items-center">
                {" "}
                <small className="ps-1"> {err}</small>
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already Have account?{" "}
                <Link to="/login">
                  <span className="btn btn-link">Login!</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
