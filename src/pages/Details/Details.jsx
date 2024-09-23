import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import LazyImg from "../../components/lazyLoadImg/LazyImg";
import useFetch from "../../components/hooks/useFetch";
import Loader from "../../components/loader/Loader";
import IngredientsAndInstructions from "./IngredientsAndInstructions";
import RecipeVideo from "./RecipeVideo";

const Details = () => {
  const useparams = useParams();
  const [recipe, setRecipe] = useState(null);
  const { data, loading } = useFetch(`/lookup.php?i=${useparams?.id}`);

  useEffect(() => {
    setRecipe(data?.meals[0]);
  }, [data]);

  return (
    <div className="bg-[#E4D2BA] min-h-screen py-20 px-4 md:px-10">
      {loading || !recipe ? (
        <Loader />
      ) : (
        <div
          className="max-w-5xl mx-auto bg-[#EFE3D3] rounded-lg shadow-lg p-6 md:p-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ecc194' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {/* Recipe Name */}
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#FF9F39]">
            {recipe?.strMeal}
          </h1>

          {/* Recipe Image */}
          <div className="flex justify-center mb-8">
            <LazyImg
              src={recipe?.strMealThumb}
              alt={recipe?.strMeal}
              css={`rounded-full w-48 h-48 md:w-64 md:h-64 shadow-lg`}
            />
          </div>

          {/* IngredientsAndInstructions */}
          <IngredientsAndInstructions recipe={recipe} />

          {/* YouTube Video */}
          {recipe?.strYoutube && <RecipeVideo recipe={recipe} />}
        </div>
      )}
    </div>
  );
};

export default Details;
