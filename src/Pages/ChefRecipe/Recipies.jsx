import React from "react";

const Recipies = ({
  id,
  chefId,
  recipeName,
  ingredients,
  cookingMethod,
  rating,
  favorite,
  recipePic
}) => {
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg">
      <img
        className="w-full h-56 object-cover"
        src={recipePic}
        alt={recipeName}
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-2xl font-bold mr-2">{recipeName}</span>
          <span className="text-base font-medium text-gray-500">{`(${chefId})`}</span>
        </div>
        <div className="mb-4">
          <span className="font-bold mr-2">Ingredients:</span>
          <ul className="list-disc ml-4">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <span className="font-bold mr-2">Cooking Method:</span>
          <p>{cookingMethod}</p>
        </div>
        <div className="mb-4">
          <span className="font-bold mr-2">Rating:</span>
          <span>{rating}</span>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {favorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
