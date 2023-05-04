import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = ({}) => {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        // Signed in
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from);
        // ...
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };
  const handleGoogleLogin = () => {
    // console.log('google')
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from);
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div>
      <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-4 ">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
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
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {errorMessage && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error:</strong>
                  <span className="block sm:inline ml-2">{errorMessage}</span>
                </div>
              )}
              <p>
                New here?{" "}
                <Link to="/register">
                  <span className="btn btn-link">Register!</span>
                </Link>
              </p>
            </form>
          </div>
          <button
            onClick={handleGoogleLogin}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center 
                google-login"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.35 10.76H12v2.98h5.64c-.42 2.33-2.45 3.85-4.77 3.85-2.76 0-5-2.24-5-5s2.24-5 5-5c1.26 0 2.42.47 3.3 1.25l2.34-2.34c-1.39-1.27-3.22-2.05-5.24-2.05-4.42 0-8 3.58-8 8s3.58 8 8 8c4.06 0 7.48-2.98 7.96-6.87z"
              ></path>
            </svg>
            <span className="mr-2">Sign in with Google</span>
          </button>
          <button onClick={handleGithubLogin} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8C0 11.69 2.29 14.88 5.47 15.97C5.87 16.06 6.02 15.84 6.02 15.62C6.02 15.43 6.01 14.84 6.01 14.19C4 14.61 3.48 13.47 3.26 12.91C3.16 12.67 2.81 11.83 2.5 11.64C2.22 11.49 1.82 11.11 2.5 11.1C3.16 11.09 3.53 11.81 3.68 12.06C4.4 13.16 5.51 12.85 6.04 12.59C6.12 12.11 6.33 11.8 6.55 11.6C4.77 11.37 2.91 10.68 2.91 7.58C2.91 6.72 3.23 5.99 3.76 5.4C3.68 5.2 3.41 4.39 3.82 3.29C3.82 3.29 4.49 3.08 6.02 4.13C6.66 3.96 7.34 3.88 8.02 3.88C8.7 3.88 9.38 3.96 10.02 4.13C11.55 3.08 12.22 3.29 12.22 3.29C12.63 4.39 12.36 5.2 12.28 5.4C12.81 5.99 13.14 6.72 13.14 7.58C13.14 10.69 11.28 11.37 9.5 11.6C9.76 11.85 10.01 12.45 10.01 13.22C10.01 14.11 10 15.23 10 15.62C10 15.84 10.15 16.06 10.55 15.97C13.71 14.88 16 11.69 16 8C16 3.58 12.42 0 8 0Z" />
            </svg>
            <span className="mr-2">Sign in with GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
