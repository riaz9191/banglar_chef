import React from "react";
import {
  FaConciergeBell,
  FaCoffee,
  FaFeatherAlt,
  FaGrinAlt,
  FaCookie,
  FaDisease,
} from "react-icons/fa";

const ExclusiveServices = () => {
  return (
    <div className="my-8 md:my-16">
      <div className="flex justify-center pt-0">
        <h2 className="text-xl text-center sm:text-2xl lg:text-3xl lg:leading-10">
          Got to know the chef You want will start to <br /> enjoy dining out
          even more.
        </h2>
      </div>

      <div className="my-container grid lg:grid-cols-3 gap-8 text-center md:grid-cols-2 sm:grid-cols-1">
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaConciergeBell className="text-8xl text-red-600" />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-center">Regular Cooking</h2>
            <p>
            This service offers traditional cooking using a variety of techniques and ingredients. It's a fundamental human activity that has been practiced for thousands of years, and it's an essential part of every culture around the world.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaCookie className="text-8xl text-red-600" />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-center">Cooking Strategy</h2>
            <p>
            This service offers a customized approach to cooking, tailored to each individual's preferences and dietary needs. Whether you're looking to eat healthier or want to try new flavors and ingredients, the cooking strategy service can help you achieve your goals.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaCoffee className="text-8xl text-red-600" />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-center">Private chef!</h2>
            <p>
            This service offers a personal chef who will prepare meals in the comfort of your own home. Whether it's for a special occasion or just to make your day-to-day life easier, having a private chef is a luxurious and convenient way to enjoy delicious, home-cooked meals.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaDisease className="text-8xl text-red-600" />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-center">Cooking Classes</h2>
            <p>
            This service offers hands-on cooking classes, where you can learn new techniques and recipes from a professional chef. It's a fun and interactive way to improve your cooking skills and impress your friends and family with your newfound culinary expertise.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaFeatherAlt className="text-8xl text-red-600" />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-center">Chef Manegement</h2>
            <p>
            This service offers management and consultation for professional chefs and food service businesses. Whether you're looking to start a new restaurant or need help managing your current operations, the chef management service can provide the expertise and guidance you need to succeed.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaGrinAlt className="text-8xl text-red-600" />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-center">Chef Management</h2>
            <p>
            This service offers catering for events and gatherings of all sizes. Whether it's a corporate function, wedding, or birthday party, the catering service can provide delicious and personalized menus that will impress your guests and make your event memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveServices;
