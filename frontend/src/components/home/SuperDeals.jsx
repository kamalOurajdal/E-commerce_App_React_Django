import React from "react";
import SuperCard from "./SuperCard";

function SuperDeals({ productItems, addToCart, addToFavourite }) {
  return (
    <>
      <section className="  py-10 flex justify-center">
        <div className="w-full m-auto">
          <div className="flex justify-between mx-4">
            <div className=" flex items-center">
              <i className="fa fa-bolt text-[#e94560] text-2xl mr-2"></i>
              <h1 className="text-2xl font-bold font-[poppins]">
                Super <span className="text-red-500">Delas</span>{" "}
              </h1>
            </div>
            <button>
              View all <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
         
          <SuperCard
            productItems={productItems}
            addToCart={addToCart}
            addToFavourite={addToFavourite}
          />
        </div>
      </section>
    </>
  );
}

export default SuperDeals;
