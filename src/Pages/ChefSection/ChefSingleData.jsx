import React from "react";

const ChefSingleData = ({ chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={chefPicture} style={{width:'350px'}} alt={chefName} />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{chefName}</h2>
          <p>Years of Experience: {yearsOfExperience}</p>
          <p>Number of Recipes: {numberOfRecipes}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-center">
            <button className="btn btnz">View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSingleData;
