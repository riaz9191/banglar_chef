/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ChefAllData from "./ChefSection/ChefAllData";
import ExclusiveServices from "./ExclusiveServices/ExclusiveServices";
import AlsoView from "./AlsoView";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../daisy/Spiner";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <Spinner className="text-center" animation="border" variant="primary" />
    );
  }
  return (
    <div className="mx-auto">
  <div
    className="hero min-h-screen bg-black opacity-100 hero-bg my-container"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://t4.ftcdn.net/jpg/05/02/88/97/360_F_502889731_E4VSkIr8MjXIQKd5uW60KTVl6W8ScUBz.jpg")`,
    }}
  >
    <div className="hero-overlay bg-opacity-0"></div>
    <div className="hero-content text-center text-neutral-content mx-auto px-4">
      <div className="max-w-5xl">
        <h1 className="mb-5 text-5xl md:text-6xl font-bold">
          Discover Amazing Chefs
        </h1>
        <p className="mb-5 text-lg md:text-xl">
          Explore our collection of talented chefs from around the world. Each
          one has a unique story to tell and a passion for creating delicious
          food. Whether you're looking for culinary inspiration or just love
          good food, you're sure to find something amazing here.
        </p>
        <Link to="/register">
          <button className="btn excz animate-bg hover:bg-green-600">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  </div>

  <div className="my-8 md:my-16 my-container">
    <h2 className="text-center mt-8 font-bold text-4xl md:text-5xl mb-8 exc">
      Chef Section
    </h2>
    <div className="ps-4 md:ps-5 pr-4 md:pr-5">
      <p className="text-lg md:text-xl text-center">
        Chefs are an important part of the culinary industry and are often
        celebrated for their creativity, skill, and dedication to their craft.
      </p>
    </div>
    <ChefAllData></ChefAllData>
  </div>

  <div className="my-8 md:my-16 my-container">
    <h2 className="text-center mt-8 font-bold text-4xl md:text-5xl mb-8 text-red-600 exc">
      Exclusive Services
    </h2>
    <ExclusiveServices></ExclusiveServices>
  </div>

  <div className="my-8 md:my-16 my-container">
    <h2 className="text-center mt-8 font-bold text-4xl md:text-5xl mb-8 text-red-600 exc">
      You should also view
    </h2>
    <AlsoView></AlsoView>
  </div>
</div>

  );
};

export default Home;
