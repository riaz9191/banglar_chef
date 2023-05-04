import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefSingleData = ({
  id,
  chefName,
  chefPicture,
  yearsOfExperience,
  numberOfRecipes,
  likes,
}) => {
  return (
    <div className="flex justify-center">
      <div className="card card-compact bg-base-100 shadow-xl max-w-sm mx-auto">
        <figure>
          <LazyLoad height={200} once>
            <img src={chefPicture} className="w-full" alt={chefName} />
          </LazyLoad>
        </figure>

        <div className="card-body text-center flex">
          <h2 className="card-title justify-center">{chefName}</h2>
          <p className="text-sm">Years of Experience: {yearsOfExperience}</p>
          <p className="text-sm">Number of Recipes: {numberOfRecipes}</p>
          <p className="text-sm">Likes: {likes}</p>
          <div className="card-actions justify-center text-center">
            <Link to={`/chefRes/${id}`}>
              <button className="btn btnz">View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSingleData;
