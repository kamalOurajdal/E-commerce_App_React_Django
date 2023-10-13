import React, { useEffect, useState } from "react";
import Slider from "../components/home/Slider";
import Categories from "../components/home/Categories";
import SuperDeals from "../components/home/SuperDeals";
import Discounts from "../components/home/Discounts";
import MoreToLove from "../components/home/MoreToLove";

function Home({ addToCart, productItems, addToFavourite }) {


  return (
    <section className="bg-[#f6f9fc]">
      <div className="hidden lg:flex flex-col items-center text-3xl fixed right-2 bottom-32 space-y-4">
        <i className="fa-brands fa-facebook text-[#1877F2]"></i>
        <i className="fa-brands fa-twitter text-[#1DA1F2]"></i>
        <i className="fa-brands fa-pinterest text-[#BD081C]"></i>
        <i className="fa-brands fa-linkedin text-[#0A66C2]"></i>
      </div>
      <div className="m-auto lg:w-[84%] flex  justify-between h-full   bg-white ">
        <div className="hidden md:flex">
          <Categories />
        </div>

        <Slider />
      </div>
      <div className=" pb-28">
        <div className=" m-auto px-4 lg:w-[84%]">
          <SuperDeals
            productItems={productItems}
            addToCart={addToCart}
            addToFavourite={addToFavourite}
          />
          <Discounts
            productItems={productItems}
            addToCart={addToCart}
            addToFavourite={addToFavourite}
          />
          {
            <MoreToLove
              productItems={productItems}
              addToCart={addToCart}
              addToFavourite={addToFavourite}
            />
          }
        </div>
      </div>
    </section>
  );
}

export default Home;
