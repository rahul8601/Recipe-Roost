import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import LazyImg from "../../components/lazyLoadImg/LazyImg";
import { Link } from "react-router-dom";

import { addRecipe } from "../../redux/slices/AddFavorites";
import { useDispatch } from "react-redux";

const MoreItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddRecipe = (item) => {
    dispatch(addRecipe(item));
  };

  return (
    <div className="bg-[#EFE3D3] rounded-2xl shadow-lg  hover:-translate-y-1 duration-[300ms] cursor-pointer flex flex-col justify-between">
      <LazyImg
        src={item.strMealThumb}
        alt={item.name}
        css={`w-[600px] h-40  object-cover rounded-t-xl`}
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-700 px-4">
        {item?.strMeal}
      </h2>
      <div className="flex justify-between mt-4 p-4">
        <button
          onClick={() => handleAddRecipe(item)}
          className=" border-[1px] border-[#ECC194] w-[40px] h-[40px] flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <BsBookmarkPlusFill className="text-[#FFB53A] size-5 " />
        </button>
        <Link to={`/details/${item.idMeal}`}>
          <button className=" bg-gradient-to-r from-[#FFB53A] to-[#FF9C39] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoreItemCard;
