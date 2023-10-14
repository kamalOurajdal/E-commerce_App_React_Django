import React from "react";
import Slider from "react-slick";
import { Collapse } from 'react-collapse';

function DiscountCard({ productItems }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings} className="">
        {productItems.map((value, index) => {
          return (
            <div className=" h-60">
              <div
              key={index}
              className=" mt-6 bg-white mx-3  pt-4 rounded-2xl shadow-md group cursor-pointer hover:scale-105 duration-500 ease-in-out"
            >
              <div className="flex justify-center items-center ">
                <img
                  src={"http://localhost:8000/"+value.cover}
                  alt=""
                  className="h-20 group transform"
                />
              </div>
              <div className="ml-4 mt-3">
                <h4 className="font-semibold text-sm text-gray-600">{value.name}</h4>
                <span className="text-[#e94560] flex justify-center font-semibold">${value.price}</span>
              </div>
            </div>
            </div>
            
          );
        })}
      </Slider>
    </>
  );
}

export default DiscountCard;
