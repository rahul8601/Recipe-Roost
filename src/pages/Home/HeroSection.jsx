import React from "react";
import Chefpng from "../../assets/chef.png";
import LazyImg from "../../components/lazyLoadImg/LazyImg";
import SearchBox from "../../components/searchBox/SearchBox";

const HeroSection = () => {
  return (
    <>
      <div className=" bg-[#E4D2BC] h-[100vh] ">
        <div className=" max-w-6xl m-auto flex items-center justify-center p-[16px]  h-full flex-col-reverse sm:flex-row w-full">
          <div className=" text-section lg:space-y-6 w-[100%] sm:w-[120%]   ">
            {/* Main heading and highlighted text */}
            <div className="md:space-y-3">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight max-w-[80%]">
                Discover Delicious Recipes with
                <span className="text-[#FF9D39]"> Recipe Roost</span>
              </h1>
              <p className="text-lg text-gray-600">
                Explore a world of
                <span className="font-semibold text-teal-600">
                  {" "}
                  flavors
                </span>{" "}
                and
                <span className="font-semibold text-teal-600"> tastes</span>.
              </p>
              <p className="text-lg text-gray-600">
                Find the{" "}
                <span className="font-semibold text-teal-600">
                  perfect recipe
                </span>{" "}
                for every occasion.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-semibold text-teal-600">
                  Cook like a pro
                </span>{" "}
                with step-by-step guides.
              </p>
            </div>

            {/* Search box component for searching recipes */}
            <SearchBox />
          </div>

          {/* Right side image chef cook */}
          <div className="flex items-center justify-center sm:justify-end lg:justify-center">
            <LazyImg
              alt={"img"}
              src={Chefpng}
              css={`object-cover md:w-[400px] min-w-[350px]  w-[300px] drop-shadow-[0_2px_20px_#EDC196]`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
