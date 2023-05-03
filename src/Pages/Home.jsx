/* eslint-disable no-unused-vars */
import React from "react";
import ChefAllData from "./ChefSection/ChefAllData";
import ExclusiveServices from "./ExclusiveServices/ExclusiveServices";
import AlsoView from "./AlsoView";

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

      <div className="">
        <div className="flex justify-center">
          <h2 className="text-center mt-8 font-bold text-4xl mb-8 exc">
            Chef Section
          </h2>
        </div>
        <div className=" ps-5 pr-5">
          <p className="text-3xl text-center">
            Chefs are an important part of the culinary industry and are often
            celebrated for their creativity, skill, and dedication to their
            craft.
          </p>
        </div>
        <ChefAllData></ChefAllData>
      </div>
      <div>
        <div className="flex justify-center">
          <h2 className="text-center mt-8 font-bold text-4xl mb-8 text-red-600 exc">
           Exclusive Services
          </h2>
        </div>

        <ExclusiveServices></ExclusiveServices>
      </div>
      <div>
        <div className="flex justify-center">
          <h2 className="text-center mt-8 font-bold text-4xl mb-8 text-red-600 exc">
          You should also view 
          </h2>
        </div>
        <AlsoView></AlsoView>
      </div>
    </div>
  );
};

export default Home;
