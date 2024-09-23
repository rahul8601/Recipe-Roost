import React, { useState, useEffect } from "react";
import useFetch from "../../components/hooks/useFetch";

import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/slices/AddFavorites";
import LocationCard from "../../components/cards/LocationCard";
import LocationCardSceleton from "../../components/cards/LocationCardSceleton";

const countries = [
  "Canadian",
  "American",
  "Chinese",
  "Indian",
  "Russian",
  "Italian",
  "Spanish",
];

const LocationBasedRecipes = () => {
  const [selectedCountry, setSelectedCountry] = useState("Canadian");
  const [recipes, setRecipes] = useState([]);

  // Using custom fetch hook to get recipes based on country
  const { data, loading } = useFetch(`/filter.php?a=${selectedCountry}`);

  const dispatch = useDispatch();

  // useEffect will trigger every time selectedCountry or data changes
  useEffect(() => {
    setRecipes(data?.meals);
  }, [selectedCountry, data]);

  // Adding recipe to favorites by dispatching the addRecipe action
  const handleAddRecipe = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="bg-[#E4D2BC]">
      <div className="max-w-6xl mx-auto p-6 h-[110%] min-h-[80vh]  ">
        {/* Country Buttons for selecting different country-based recipes */}
        <div className="flex justify-center mb-8 space-x-4  flex-wrap ">
          {countries?.map((country, i) => (
            <button
              key={i}
              className={`px-4 py-2 my-2  rounded-full shadow-lg transition-colors duration-300  ${
                selectedCountry === country
                  ? "bg-gradient-to-r from-[#FFB53A] to-[#FF9C39] text-white"
                  : "bg-[#EFE3D3] text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCountry(country)}
            >
              {/* Displaying the country name */}
              {country}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 justify-items-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <>
              {Array.from({ length: 9 }).map((_, i) => (
                <LocationCardSceleton key={i} />
              ))}
            </>
          ) : (
            <>
              {recipes
                ?.map((recipe, i) => (
                  <LocationCard
                    key={i}
                    recipe={recipe}
                    handleAddRecipe={handleAddRecipe}
                  />
                ))
                .slice(0, 12)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationBasedRecipes;
