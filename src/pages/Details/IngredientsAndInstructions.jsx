import React from "react";

const IngredientsAndInstructions = ({ recipe }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Ingredients and Measures */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#FF9F39]">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {Array.from({ length: 20 }).map((_, index) => {
              const ingredient = recipe[`strIngredient${index + 1}`];
              const measure = recipe[`strMeasure${index + 1}`];
              return (
                ingredient && (
                  <li key={index} className="text-gray-700">
                    {ingredient} -{" "}
                    <span className="font-medium">{measure}</span>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#FF9F39]">
            Instructions
          </h2>
          <p className="leading-relaxed text-gray-700">
            {recipe?.strInstructions}
          </p>
        </div>
      </div>
    </>
  );
};

export default IngredientsAndInstructions;
