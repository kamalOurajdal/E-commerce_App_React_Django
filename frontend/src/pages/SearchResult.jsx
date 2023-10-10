import React, { useState } from "react";
import FilterSearchResult from "../components/resultSearch/FilterSearchResult";
import Data from "../components/home/Data";
import MoreToLoveCard from "../components/home/MoreToLoveCard";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const under = searchParams.get("under");
  console.log("under ", under);

  const { productItems } = Data;
  const [isSearchFilterOpen, setIsSearchFilterOpen] = useState(false);
  const toggleSearchFilter = () => {
    setIsSearchFilterOpen(!isSearchFilterOpen);
  };
  return (
    <section className="  pt-10 pb-32 bg-[#f6f9fc]">
      <div className="px-3 lg:w-[84%]  m-auto ">
        <h1 className=" text-3xl">
          Showing results for <span className="font-bold">Phone case</span>
        </h1>
        <h6 className="text-gray-500 mt-6">We found 102 products</h6>
        <div className=" flex flex-col lg:flex-row justify-between mt-4">
          <div className="hidden lg:flex">
            <FilterSearchResult />
          </div>

          <div className="flex justify-end">
            <h1 className="lg:hidden flex justify-center items-center rounded-md border border-gray-400 text-[#e94560] p-2">
              <i
                class="fa-solid fa-filter  mr-2"
                onClick={toggleSearchFilter}
              ></i>
              Filter
            </h1>

            {isSearchFilterOpen && (
              <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 h-screen flex justify-center items-center`}
              >
                <FilterSearchResult toggleSearchFilter={toggleSearchFilter} />
              </div>
            )}
          </div>
          <div className="lg:ml-4 grid grid-cols-2 gap-2 lg:grid-cols-4 w-full lg:gap-4  ">
            {productItems.map((product, index) => (
              <MoreToLoveCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
