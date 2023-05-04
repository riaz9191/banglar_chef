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
              Cooking is the art and science of preparing food using a variety
              of techniques and ingredients. It is a fundamental human activity
              that has been practiced for thousands of years, and it is an
              essential part of every culture around the world.
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
              Cooking is the art and science of preparing food using a variety
              of techniques and ingredients. It is a fundamental human activity
              that has been practiced for thousands of years, and it is an
              essential part of every culture around the world.
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
              Cooking is the art and science of preparing food using a variety
              of techniques and ingredients. It is a fundamental human activity
              that has been practiced for thousands of years, and it is an
              essential part of every culture around the world.
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
              Cooking is the art and science of preparing food using a variety
              of techniques and ingredients. It is a fundamental human activity
              that has been practiced for thousands of years, and it is an
              essential part of every culture around the world.
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
              Cooking is the art and science of preparing food using a variety
              of techniques and ingredients. It is a fundamental human activity
              that has been practiced for thousands of years, and it is an
              essential part of every culture around the world.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaGrinAlt className="text-8xl text-red-600" />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-center">Regular Cooking</h2>
            <p>
              Cooking is the art and science of preparing food using a variety
              of techniques and ingredients. It is a fundamental human activity
              that has been practiced for thousands of years, and it is an
              essential part of every culture around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveServices;
