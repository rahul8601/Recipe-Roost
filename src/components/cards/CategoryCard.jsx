import React from "react";
import LazyImg from "../lazyLoadImg/LazyImg";
import { useNavigate } from "react-router";

const CategoryCard = ({ resItem }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-[195px] sm:w-[240px] mx-auto shadow-xl rounded-3xl  mt-[100px]">
        <div
          className={`relative bg-[#EFE3D3] shadow-inner rounded-3xl  p-6 w-[195px] sm:w-[240px] flex items-center justify-center`}
        >
          <div className="absolute top-[-80px]  rounded-full shadow-lg overflow-hidden ">
            <LazyImg
              src={resItem?.strCategoryThumb}
              alt="category Img"
              css={`w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]  object-cover rounded-full  shadow-inner relative top-[10px]`}
            />
          </div>

          <div className="pt-6 sm:pt-12 text-center">
            <div className="mt-7">
              <span className="text-yellow-400 px-3 py-1">★★★★★</span>
            </div>

            <div className="py-2">
              <h6>{resItem?.strCategory}</h6>
            </div>

            <div>
              <button
                onClick={() => navigate(`more-items/${resItem?.strCategory}`)}
                className="mt-6 bg-gradient-to-r from-[#FFB53A] to-[#FF9C39] text-sm font-semibold text-gray-800 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                More Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
