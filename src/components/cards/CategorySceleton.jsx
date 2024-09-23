import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton"; // Skeleton import
import "react-loading-skeleton/dist/skeleton.css"; // Skeleton CSS import

const CategorySceleton = () => {
  return (
    <SkeletonTheme baseColor="#ddbc9a" highlightColor="#EFCAA0">
      <div className=" w-[195px] sm:w-[240px] mx-auto shadow-xl rounded-3xl  mt-[100px]">
        <div
          className={`relative bg-[#EFE3D3] shadow-inner rounded-3xl  p-6 w-[195px] sm:w-[240px] flex items-center justify-center`}
        >
          {/* // Skeleton for image */}
          <div className="absolute top-[-80px]  rounded-full shadow-lg overflow-hidden ">
            <Skeleton circle={true} height={140} width={140} />
          </div>

          <div className="pt-6 sm:pt-12 text-center">
            {/* // Skeleton for rating */}
            <div className="mt-7">
              <Skeleton width={80} height={20} />
            </div>

            {/* // Skeleton for title */}
            <div className="py-2">
              <Skeleton width={100} height={20} />
            </div>

            {/* // Skeleton for button */}
            <Skeleton width={120} height={35} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CategorySceleton;
