import React from "react";

const ChefsTipsCard = ({ tipItem }) => {
  return (
    <div className="bg-[#EFE3D3] rounded-lg shadow-lg overflow-hidden">
      {/* Displaying image */}
      <img
        src={tipItem.imgSrc}
        alt={tipItem.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#FF9F39]">
          {tipItem.title}
        </h3>
        <p className="text-gray-700 mt-4">{tipItem.description}</p>
        <a className="inline-block mt-6 text-[#FF9C39] hover:underline cursor-pointer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ChefsTipsCard;
