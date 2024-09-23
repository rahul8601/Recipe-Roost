import React, { useEffect, useState } from "react";
import SearchCardItem from "./SearchCardItem";
import SearchSceleton from "./SearchSceleton";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [resRecipe, setResRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  const BaseUrl = "https://www.themealdb.com/api/json/v1/1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BaseUrl}/search.php?s=${query}`);
        const data = await response.json();
        setResRecipe(query ? data : null);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    let timeOut = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);

  const handleChange = (e) => {
    if (e.target.value.trim()) {
      setQuery(e.target.value);
    } else {
      setQuery("");
    }
  };

  return (
    <div className="flex justify-start items-center mt-4  relative ">
      <div className="w-full max-w-md">
        <input
          value={query}
          onChange={handleChange}
          type="text"
          placeholder="Search Recipe..."
          className="w-full py-2 pl-4 pr-14 text-gray-700 bg-[#EFE3D3]  border border-[#FF9F39] rounded-full focus:outline-none focus:ring-2 focus:ring-[#F8D59F] focus:border-[#F8D59F] placeholder-gray-500"
        />

        {query && query?.length > 0 ? (
          <div className="py-4 pr-4 shadow-lg bg-[#ECC194] min-w-[290px] max-w-[40%]  absolute top-[48px]  rounded-lg z-30">
            <div className="  bg-[#ECC194] rounded-lg  px-2.5 min-h-[rem]  overflow-y-scroll custom-scrollbar max-h-[16rem]">
              {loading ? (
                <SearchSceleton />
              ) : (
                <>
                  {resRecipe?.meals?.map((item, i) => (
                    <SearchCardItem key={i} item={item} />
                  ))}
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBox;
