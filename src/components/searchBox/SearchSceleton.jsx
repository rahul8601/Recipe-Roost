import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchSceleton = () => {
  return (
    <SkeletonTheme baseColor="#ddbc9a" highlightColor="#EFCAA0">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className=" bg-[#EFE3D3] shadow-lg  rounded-full flex items-center h-14 p-2 mb-2  "
        >
          <Skeleton
            circle={true}
            className="h-12 w-12 rounded-full object-cover mr-4 p-[1px] "
          />
          <Skeleton className="w-36 h-6" />
        </div>
      ))}
    </SkeletonTheme>
  );
};

export default SearchSceleton;
