import React from "react";
import useFetch from "../../components/hooks/useFetch";
import { useParams } from "react-router";
import MoreItemCard from "./MoreItemCard";
import MoreItemSceleton from "./MoreItemSceleton";

const MoreItem = () => {
  const useparams = useParams();
  const { data, loading } = useFetch(`/filter.php?c=${useparams?.name}`);

  return (
    <div className="bg-[#E4D2BA] min-h-screen">
      {loading ? (
        <MoreItemSceleton />
      ) : (
        <div className="max-w-6xl mx-auto px-[16px] pt-20 pb-20 overflow-hidden">
          {/* Header Section */}
          <div className="flex justify-start mb-8">
            <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-[#FF9C39]">
              More Items
            </h1>
          </div>

          {/* Related Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  ">
            {data?.meals?.map((item, i) => (
              <MoreItemCard key={i} item={item} loading={loading} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreItem;
