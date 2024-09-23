import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton"; // Skeleton import karen
import "react-loading-skeleton/dist/skeleton.css"; // Skeleton CSS import karen

const MoreItemSceleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#ddbc9a" highlightColor="#EFCAA0">
        <div className="max-w-6xl mx-auto px-[16px] pt-20 pb-20 overflow-hidden">
          {/* Header Section */}
          <div className="flex justify-start mb-8">
            <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-[#FF9C39]">
              More Items
            </h1>
          </div>

          {/* Related Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {Array.from({ length: 6 }).map((_, i) => (
              // Card Item
              <div key={i} className="bg-[#EFE3D3] rounded-2xl shadow-lg">
                <Skeleton
                  height={160}
                  className="rounded-t-2xl relative top-[-4px]"
                />
                <h2 className="mt-4  px-4">
                  <Skeleton width={200} height={20} />
                </h2>
                <div className="flex justify-between mt-4 p-4">
                  <Skeleton circle={true} width={40} height={40} />
                  <Skeleton width={120} height={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default MoreItemSceleton;
