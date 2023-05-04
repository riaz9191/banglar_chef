/* eslint-disable no-unused-vars */
import React from "react";
import ChefAllData from "./ChefSection/ChefAllData";
import ExclusiveServices from "./ExclusiveServices/ExclusiveServices";
import AlsoView from "./AlsoView";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen  bg-black opacity-100 hero-bg "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://t4.ftcdn.net/jpg/05/02/88/97/360_F_502889731_E4VSkIr8MjXIQKd5uW60KTVl6W8ScUBz.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content  mr-5">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold">Discover Amazing Chefs</h1>
            <p className="mb-5">
              Explore our collection of talented chefs from around the world.
              Each one has a unique story to tell and a passion for creating
              delicious food. Whether you're looking for culinary inspiration or
              just love good food, you're sure to find something amazing here.
            </p>
            <Link to="/register">
              <button className="btn excz animate-bg hover:bg-green-600">Register Now</button>
            </Link>
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
          <p className="text-xl text-center">
            Chefs are an important part of the culinary industry and are <br /> often
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
