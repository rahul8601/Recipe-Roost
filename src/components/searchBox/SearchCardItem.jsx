import React from "react";
import LazyImg from "../lazyLoadImg/LazyImg";
import { useNavigate } from "react-router";

const SearchCardItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/details/${item.idMeal}`)}
      className=" bg-[#EFE3D3] shadow-lg  hover:bg-gradient-to-r hover:from-[#FFB53A] hover:to-[#FF9D39] hover:text-white rounded-full flex items-center h-14 p-2 mb-2  duration-500 cursor-pointer"
    >
      <LazyImg
        src={item?.strMealThumb}
        css={`h-12 w-12 rounded-full object-cover mr-4 p-[1px] shadow-lg`}
      />
      <div className="flex flex-col">
        <span className="font-medium text-gray-700">
          {item.strMeal.slice(0, 18)}
          {item.strMeal.length >= 18 ? "..." : null}
        </span>
      </div>
    </div>
  );
};

export default SearchCardItem;
