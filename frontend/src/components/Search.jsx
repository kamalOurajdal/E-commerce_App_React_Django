import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Search({ nbrItem }) {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector("section");
    if (this.window.scrollY > 100) {
      search.classList.add("fixed", "top-0", "left-0", "shadow-lg", "z-50");
    } else {
      search.classList.remove("fixed", "top-0", "left-0", "shadow-lg", "z-50");
    }
  });


  return (
    <section className="w-full bg-white">
      <div
        className={`m-auto flex flex-col items-center justify-around w-[84%] pt-3 pb-2 bg-white`}
      >
        <div className="w-full flex items-center justify-between ">
          <Link to={"/"}>
            <h1 className="font-bold text-2xl md:text-3xl  ">
              Kan<span className="text-[#e94560]">9ala</span>
            </h1>
          </Link>

          <div className="hidden md:flex md:flex-grow md:mx-12 ">
            <div className=" flex items-center bg-[#F5F5F5] rounded-full pl-4 w-full ">
              <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
              <input
                type="text"
                name=""
                id=""
                placeholder="Type to search products..."
                className="w-full h-11 bg-transparent rounded-full px-4 focus:outline-none placeholder:text-sm "
              />
            </div>
          </div>

          <div className="  flex  items-center justify-between space-x-6 text-gray-500 text-lg ">
            <i className="fa-solid fa-magnifying-glass cursor-pointer md:hidden"></i>
            <Link to={"/card"}>
              <div className="relative cursor-pointer">
                <i className="fa-solid fa-cart-shopping "></i>
                <span className={`${nbrItem === 0 ? "hidden":"flex"} absolute -right-2 -top-1 text-[9px] w-4 h-4 flex items-center justify-center  bg-[#e94560] rounded-full text-white font-semibold`}>
                  {nbrItem === 0 ? "" : nbrItem}
                </span>
              </div>
            </Link>
            <Link to={"/favourites"}>
              <i className="fa-regular fa-heart cursor-pointer"></i>
            </Link>
            <Link to={"profile"}>
              <i className="fa-regular fa-user cursor-pointer"></i>
            </Link>
           
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-gray-500 text-xs mt-2 ml-4">
            <li className="cursor-pointer hover:text-[#e94560] ">
              iphone case
            </li>
            <li className="cursor-pointer hover:text-[#e94560]">
              watch for men
            </li>
            <li className="cursor-pointer hover:text-[#e94560]">
              sunglasses women
            </li>
            <li className="cursor-pointer hover:text-[#e94560]">
              makeup brushes
            </li>
            <li className="cursor-pointer hover:text-[#e94560]">massage gun</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Search;
