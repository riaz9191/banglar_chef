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
    <div >
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <LazyLoad height={200} once>
            <img src={chefPicture} style={{ width: "350px" }} alt={chefName} />
          </LazyLoad>
        </figure>

        <div className="card-body text-center">
          <h2 className="card-title justify-center">{chefName}</h2>
          <p>Years of Experience: {yearsOfExperience}</p>
          <p>Number of Recipes: {numberOfRecipes}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-center">
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
