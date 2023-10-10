import React from "react";
import DiscountCard from "./DiscountCard";

function Discounts({ productItems }) {
  return (
    <>
      <section className=" rounded-xl ">
        <div className="w-full h-64">
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-4">
              <i className="fa-solid fa-gift mr-1 text-xl text-[#e94560]"></i>
              <h2 className="font-bold ">Big Discounts</h2>
            </div>
            <div className="flex items-center ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right mr-4"></i>
            </div>
          </div>
          <DiscountCard productItems={productItems}/>
        </div>
      </section>
    </>
  );
}

export default Discounts;
