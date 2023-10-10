import React from "react";
import Sdata from "./SliderData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

function SliderCardData() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
    pauseOnHover: false,
    
  };
  
  return (
    /* w-4/5 h-[65vh] bg-white shadow-md  */
    <div className="w-screen h-64 bg-white shadow-md md:w-4/5 md:h-[70vh] mt-8 md:mt-0">
      <Slider {...settings} className=" h-full w-screen md:w-full">
        {Sdata.map((value, index) => (
          <div className="flex justify-center items-center md:h-[70vh] w-screen h-64  pl-5" key={index}>
            <div className="flex justify-between items-center h-full relative">
              <div className="w-full font-bold top-8 text-gray-600 flex flex-col">
                <div className="absolute top-2 md:top-20">
                  <h1 className="text-red-500 text-lg md:text-3xl font-bold text-center">{value.title}</h1>
                  <p className="text-xs w-3/4  mt-4 md:text-xl">{value.desc}</p>
                </div>
                <button className="bg-[#e94560] text-xs md:text-base text-white rounded-md p-2 mt-20 w-fit hover:bg-orange-400">
                  Visit Collections
                </button>
              </div>
              <img src={value.cover} alt="" className="h-40 mr-4 md:h-96 mt-6 md:mr-20" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCardData;
