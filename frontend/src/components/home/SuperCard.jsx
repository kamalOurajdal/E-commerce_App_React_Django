import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <button className=" text-white font-bold text-xl absolute top-[45%] -right-2 h-10 w-10 md:w-14 md:h-14 bg-[#0f3460] rounded-full z-20">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <button className=" text-white font-bold text-xl absolute top-[45%] -left-2 h-10 w-10 md:w-14 md:h-14 bg-[#0f3460] rounded-full z-20">
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
        {productItems.map((item, index) => {
          return (
            <div className=" group " key={index}>
              <div className="px-2 lg:px-4 bg-white h-64 lg:h-72 relative shadow-md rounded-md m-1 lg:m-3  flex flex-col justify-around ">
                <Link to={"/product_details"}>
                  <div className="flex flex-col ">
                    <div className=" h-full  flex flex-col justify-center items-center">
                      <span className=" text-xs lg:text-base absolute top-0 left-0 bg-[#e94560] py-1 px-2 lg:px-3 font-[poppins] rounded-full text-white m-2 ">
                        {item.discount}% Off
                      </span>
                      <img
                        src={item.cover}
                        alt=""
                        className="w-28 mt-6 lg:w-32 lg:mt-8"
                      />
                    </div>

                    <div className="text-lg  flex flex-col justify-end py-2 ">
                      <h3 className="font-bold text-sm lg:text-base">
                        {item.name}
                      </h3>
                      <div className="text-xs lg:text-sm text-[#ffcd4e]  py-2 ">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="lg:mb-2 font-bold flex justify-between items-center text-xl text-gray-500">
                  <i
                    className="fa-regular fa-heart text-xl my-2 mx-1 hover:text-[#e94560] cursor-pointe"
                    onClick={() => addToFavourite(item)}
                  ></i>
                  <h4 className="text-[#e94560]">${item.price}.00 </h4>
                  <button
                    className="  hover:text-[#e94560] text-xl   rounded-md px-2"
                    onClick={() => addToCart(item)}
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SuperCard;
