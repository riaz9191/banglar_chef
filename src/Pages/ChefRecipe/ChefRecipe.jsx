import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipies from "./Recipies";

const ChefRecipe = () => {
  const { id } = useParams();
  const chefData = useLoaderData();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipeData = async () => {
      const response = await fetch("http://localhost:7000/recipe");
      const data = await response.json();
      setRecipe(data);
      console.log(data);
    };

    fetchRecipeData();
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse  my-container">
          <img
            src={chefData.chefPicture}
            alt={chefData.chefName}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex-1 px-4 py-8 lg:py-0 lg:pl-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {chefData.chefName}
            </h1>
            <p className="text-gray-600 mb-8">{chefData.shortDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 shadow">
                <h2 className="text-lg font-bold mb-4">Years of Experience</h2>
                <p className="text-3xl font-bold">
                  {chefData.yearsOfExperience}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h2 className="text-lg font-bold mb-4">Number of Recipes</h2>
                <p className="text-3xl font-bold">{chefData.numberOfRecipes}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h2 className="text-lg font-bold mb-4">Likes</h2>
                <p className="text-3xl font-bold">{chefData.likes}</p>
              </div>
            </div>
           
            
           
          </div>
        </div>
        
      </div>
      <div className="grid lg:grid-cols-3 gap-8 justify-between mt-12 my-container">
              {recipe.map((recipe) => (
                <Recipies key={recipe.id} {...recipe} />
              ))}
            </div>
    </div>
  );
};

export default ChefRecipe;
