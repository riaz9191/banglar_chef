/* eslint-disable no-unused-vars */
import React from "react";
import ChefAllData from "./ChefSection/ChefAllData";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen  bg-black opacity-100"
        style={{
          backgroundImage: `url("https://blog.petpooja.com/wp-content/uploads/2022/05/best-chefs-in-India.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Register Here</button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mt-8 font-bold text-4xl mb-8">Chef Section</h2>
        <ChefAllData></ChefAllData>
      </div>
    </div>
  );
};

export default Home;
