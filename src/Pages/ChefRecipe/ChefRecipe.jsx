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
    };

    fetchRecipeData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${chefData.chefPicture})`,  backgroundSize: 'cover',
          backgroundPosition: 'center',        
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse my-container" >
          <img
            src={chefData.chefPicture}
            alt={chefData.chefName}
            className="w-full md:max-w-sm rounded-lg shadow-2xl mb-4 md:mb-0"
          />
          <div className="flex-1 px-4 py-8 md:py-0 md:pl-8">
            <h1 className="text-4xl lg:text-5xl text-white font-bold mb-4">
              {chefData.chefName}
            </h1>
            <p className="text-white mb-8">{chefData.shortDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      <div className="text-center text-3xl mt-8 bg-red-400 text-white py-4">
        Recipes
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between my-container">
        {recipe.map((recipe) => (
          <Recipies key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecipe;
