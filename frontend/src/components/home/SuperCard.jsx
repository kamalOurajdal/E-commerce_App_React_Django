import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <button className=" text-white font-bold text-xl absolute top-[45%] -right-2 h-8 w-8 md:w-10 md:h-10 bg-[#0f3460] rounded-full z-20">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <button className=" text-white font-bold text-xl absolute top-[45%] -left-2 h-8 w-8 md:w-10 md:h-10 bg-[#0f3460] rounded-full z-20">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const SuperCard = ({ productItems, addToCart, addToFavourite }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // sepecify lines
    rows: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="">
        {productItems.map((product, index) => {
          if (product.isPromotion === true){
            return (
              <>
               <div className=" group px-2 lg:px-4 bg-[#fff] relative shadow-md rounded-md mt-4 lg:mt-0 lg:m-2 flex-grow flex flex-col justify-around  h-72  ">
              <Link to={`/product_details?id=${product.id}`}>
                <div className="cursor-pointer ">
                  <div className="my-4 flex flex-col justify-center items-center ">
                    <img
                      src={"http://localhost:8000/" + product.cover}
                      alt=""
                      className="h-32"
                    />
                  </div>
                </div>
                <span className=" text-xs lg:text-base absolute top-0 left-0 bg-[#e94560] py-1 px-2 lg:px-3 font-[poppins] rounded-full text-white m-2 ">
                      {Math.floor(((product.price - product.promotionPrice) / product.price) * 100)}% Off

                      </span>
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
          
        })}
      </Slider>
    </>
  );
};

export default SuperCard;
