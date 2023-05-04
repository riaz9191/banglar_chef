import React, { useState } from "react";
import { toast } from "react-toastify";
import StarRatings from "react-star-ratings";

const Recipies = ({
  id,
  chefId,
  recipeName,
  ingredients,
  cookingMethod,
  rating,
  recipePic,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [stars, setStars] = useState(rating);

  const handleButtonClick = () => {
    setIsButtonDisabled(true);
    toast.success(`${recipeName} added to your favorites!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleRatingChange = (newRating) => {
    // Do something with the new rating
    setStars(newRating);
  };

  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg flex flex-col">
      <img
        className="w-full h-56 object-cover"
        src={recipePic}
        alt={recipeName}
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <span className="text-2xl font-bold mr-2">{recipeName}</span>
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
          <StarRatings
            rating={rating}
            readonly
            starRatedColor="#FFC107"
            starHoverColor="#FFC107"
            changeRating={handleRatingChange}
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
        </div>
      </div>
      <div className="p-4 flex justify-center items-center">
        <button
          className={`bg-red-500 ${
            isButtonDisabled ? "bg-red-300 cursor-not-allowed" : ""
          } text-white font-bold py-2 px-4 rounded`}
          onClick={handleButtonClick}
          disabled={isButtonDisabled}
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default Recipies;
