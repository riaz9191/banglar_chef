import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen my-container">
      <img src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="404 Not Found" className="mb-8 h-64" />
      <h1 className="text-4xl font-bold mb-2 ">404 Not Found</h1>
      <p className="text-gray-500 text-xl">
        The page you're looking for does not exist.
      </p>
      <Link></Link>
    </div>
  );
};

export default ErrorPage;
