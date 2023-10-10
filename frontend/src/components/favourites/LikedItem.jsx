import React, { useState } from "react";
import ListsPopup from "./ListsPopup";

function LikedItem({
  product,
  removeFavouriteItem,
  addToCart,
  changeListTo,
  handleAddListName,
  listNames,
}) {
  const [isListNamesPopupOpen, setIsListNamesPopupOpen] = useState(false); 


  const openListNamesPopup = () => {
    setIsListNamesPopupOpen(true);
  };
  const closeListNamesPopup = () => {
    setIsListNamesPopupOpen(false);
  };



  return (
    <div className="h-44  bg-white shadow-md spacy flex flex-col lg:flex-row  justify-between px-4 py-2 lg:px-12 rounded-md">
      <div className="flex   justify-center items-center space-x-4 lg:w-1/2">
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
        <img src={"http://localhost:8000/" + product.cover} alt={product.name} className="h-24 " />

        <div className="">
          <h2 className="mb-1 font-semibold">{product.name}</h2>
          <h2 className=" text-sm text-gray-500">
            iste facilis suscipit, itaque nobis voluptatum facere libero!
          </h2>
        </div>
      </div>

      <div className="flex justify-between lg:flex-col lg:justify-between w-full lg:w-fit  py-5 ">
        <button
          className="flex items-center justify-center space-x-2 border p-2 rounded-md text-[#e94560] hover:bg-[#e94560] hover:text-white duration-500 ease-in-out"
          onClick={() => {
            addToCart(product);
          }}
        >
          <i className="fa-solid fa-cart-plus "></i>
          <h2 className="text-sm">Move to cart</h2>
        </button>
        <b2tton
          className="flex items-center justify-center space-x-2 border p-2 rounded-md text-[#e94560] hover:bg-[#e94560] hover:text-white duration-500 ease-in-out"
          onClick={() => {openListNamesPopup()}}
        >
          <i className="fa-solid fa-list "></i>
          <h2 className="text-sm ">Move to list</h2>
        </b2tton>
        {isListNamesPopupOpen && (
          <ListsPopup
            product={product}
            closeListNamesPopup={closeListNamesPopup}
            changeListTo={changeListTo}
            handleAddListName={handleAddListName}
            listNames={listNames}

          />
        )}
        <button
          className="flex items-center justify-center space-x-2 border p-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white duration-500 ease-in-out"
          onClick={() => {
            removeFavouriteItem(product);
          }}
        >
          <i className="fa-solid fa-trash-can "></i>
          <h2 className="text-sm ">Remove</h2>
        </button>
  
      </div>
    </div>
  );
}

export default LikedItem;
