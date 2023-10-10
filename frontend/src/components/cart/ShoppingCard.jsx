import React, { useRef, useState } from "react";

function ShoppingCard({ product, decrementQty, addToCart, handelRemoveProduct }) {
  
  console.log("product :", product);

  const handleRemove = () => {
    handelRemoveProduct(product);
  };

  return (
    <div className="lg:h-44  bg-white shadow-md spacy flex flex-col lg:flex-row py-4 justify-between px-4 lg:px-12 rounded-md">
      <div className="flex  justify-center items-center space-x-4 lg:w-1/2 ">
        
        <label
          htmlFor={`item${product.id}`}
          className="relative text-sm  text-gray-500 cursor-pointer"
        >
          <input
            type="checkbox"
            name={`item${product.id}`}
            id={`item${product.id}`}
            className="  outline-none  w-5 h-5 appearance-none border border-gray-500 rounded-full checked:bg-[#FA462D] peer"
          />
          <i className="fa-solid fa-check absolute left-1 top-1 font-bold opacity-0 text-white peer-checked:opacity-100  "></i>
        </label>
        <img src={"http://localhost:8000/" + product.cover}  alt={product.name} className="h-32 " />

        <div className="">
          <h2 className="mb-1 font-semibold">{product.name}</h2>
          <h2 className=" text-sm text-gray-500">
            iste facilis suscipit, itaque nobis voluptatum facere libero!
          </h2>
        </div>
        
      </div>

      <div className="flex flex-row-reverse lg:flex-col justify-between  ml-12 lg:ml-0 lg:py-5 mt-4 lg:mt-0  lg:w-[26%]  ">
        <p className="text-right text-lg text-[#e94560] font-bold">
          ${product.price * product.qty}
        </p>
        <div className="flex justify-between items-center w-52 lg:w-full ">
          <div className="flex justify-end space-x-6 text-gray-500 ">
            <i className="fa-solid fa-trash-can cursor-pointer" onClick={handleRemove}></i>
            <i className="fa-solid fa-heart cursor-pointer"></i>
          </div>
          <div className="flex justify-between items-center w-28 ">
            <button
              className="text-xl font-medium bg-[#f6f9fc] text-[#e94560] w-8 h-8 rounded-full border "
              onClick={() => decrementQty(product)}
            >
              -
            </button>
            <h1 className="font-semibold text-gray-500">{product.qty}</h1>
            <button
              className="text-xl font-medium bg-[#f6f9fc] text-[#e94560] w-8 h-8  rounded-full border "
              onClick={() => addToCart(product)}
            >
  
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
