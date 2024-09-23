import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LocationCardSceleton = () => {
  return (
    <div
      className={`relative flex items-center bg-[#EFE3D3]  rounded-lg shadow-lg w-[260px] p-4 pr-12 h-32`}
    >
      <SkeletonTheme baseColor="#ddbc9a" highlightColor="#EFCAA0">
        {/* Recipe Details */}
        <div className="w-full">
          {/* // Skeleton for title */}
          <Skeleton width={156} height={20} />
          {/* // Skeleton for rating */}
          <div className="mt-1">
            <Skeleton width={80} height={16} />
          </div>
          {/* // Skeleton for btn */}
          <Skeleton width={140} height={35} />
        </div>

        {/* Recipe Image */}
        <div className="absolute right-[-10%] overflow-hidden top-[10%]">
          <Skeleton
            circle={true}
            height={100}
            width={100}
            className="leading-normal"
          />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default LocationCardSceleton;
