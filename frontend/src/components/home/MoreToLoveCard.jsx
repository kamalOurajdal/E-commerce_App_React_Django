import React from "react";
import TopicsHelp from "./../help/TopicsHelp";
import { Link } from "react-router-dom";
function MoreToLoveCard({ product, addToCart, addToFavourite }) {
  return (
    <>
      <div className="group px-2 lg:px-4 bg-[#fff] relative shadow-md rounded-md mt-4 lg:mt-0 lg:m-2 flex-grow flex flex-col justify-around  h-72  ">
        <Link to={"/search"}>
          <div className="cursor-pointer ">
            <div className="my-4 flex flex-col justify-center items-center ">
              <img
                src={"http://localhost:8000/" + product.cover}
                alt=""
                className="h-32"
              />
            </div>
          </div>
        </Link>
        <div>
          <div className="lg:text-lg  flex flex-col justify-end  ">
            <h3 className="font-semibold text-base text-gray-600">{product.name}</h3>
            <div className=" text-[#ffcd4e] text-xs lg:text-base py-2 ">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="lg:mb-2 font-bold flex justify-between items-center text-xl text-gray-500">
          
          
          <i
            className="fa-regular fa-heart text-xl my-2 mx-1 hover:text-[#e94560] cursor-pointe"
            onClick={() => addToFavourite(product)}
          ></i>
          <h4 className="text-[#e94560]">${product.price}.00 </h4>
          <button
            className="  hover:text-[#e94560] text-xl   rounded-md px-2"
            onClick={() => addToCart(product)}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default MoreToLoveCard;
