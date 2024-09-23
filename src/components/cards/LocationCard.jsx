import React from "react";
import LazyImg from "../../components/lazyLoadImg/LazyImg";
import { Link } from "react-router-dom";
import { CiBookmarkPlus } from "react-icons/ci";

const LocationCard = ({ recipe, handleAddRecipe }) => {
  return (
    <>
      <div
        className={`relative flex items-center bg-[#ECC194]  rounded-lg shadow-lg w-[260px] p-4 pr-12 h-32`}
      >
        {/* Recipe Details */}
        <div className="w-full">
          <h2 className="text-lg font-semibold text-gray-800">
            {recipe.strMeal.slice(0, 16).trim()}
            {recipe.strMeal.length >= 18 ? "..." : ""}
          </h2>

          {/* //Static rating for simplicity */}
          <div className="mt-1">
            <span className="text-[#FF9C39]">★★★★★</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleAddRecipe(recipe)}
              className="flex items-center justify-center mt-2 border-[1px] border-[#FF9C39] text-gray-800 text-sm w-[30px] h-[30px]  rounded-full shadow hover:scale-105 transition-transform duration-300"
            >
              <CiBookmarkPlus className="text-gray-800 text-lg font-bold " />
            </button>
            <Link to={`details/${recipe?.idMeal}`}>
              <button className="mt-2 border-[1px] border-[#FF9C39] text-gray-800 text-sm  px-3 py-1 rounded-full shadow hover:scale-105 transition-transform duration-300">
                View Recipe
              </button>
            </Link>
          </div>
        </div>

        {/* Recipe Image */}
        <div className="absolute right-[-10%] overflow-hidden top-[10%]">
          <LazyImg
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            css={` size-[100px] rounded-full shadow-md`}
          />
        </div>
      </div>
    </>
  );
};

export default LocationCard;
