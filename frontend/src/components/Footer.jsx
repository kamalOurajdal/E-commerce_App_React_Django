import React, { useState } from "react";
import { Collapse } from "react-collapse";

function Footer() {
  const [open, setOpen] = useState(false);
  const toggleCollapse = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <footer className="bg-[#0f3060] w-full pt-14 lg:pt-20 px-4 lg:px-20 ">
      <div className="relative w-full  flex justify-center">
        {/* absolute -top-32  shadow-[rgba(0,_0,_0,_0.3)_4px_2px_10px] bg-white   w-2/3 flex justify-between items-center px-8 rounded-md py-6 */}
        <div className="absolute -top-24 lg:-top-32 p-2 w-full lg:w-2/3 lg:flex lg:justify-between lg:items-center lg:px-8 lg:py-6 rounded-md bg-white shadow-[rgba(0,_0,_0,_0.3)_4px_2px_10px]">
          <h1 className="font-bold mb-2 lg:mb-0 text-lg lg:text-2xl text-[#0f3060] text-center lg:text-left">
            Subscribe to our news
          </h1>
          <div className="flex justify-between items-center lg:w-2/3 border  border-gray-300 rounded-full pr-1">
            <input
              type="email"
              placeholder="Enter your email"
              className=" h-10 flex-grow bg-transparent lg:rounded-full lg:bg-gray-100 pl-5 focus:outline-none lg:ml-4 "
            />
            <button className="bg-red-500 rounded-full px-2 lg:px-4 p-1 lg:py-2 lg:ml-6 font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:justify-between md:items-start text-gray-400">
        <div className=" w-full lg:w-1/4">
          <h1 className="font-bold text-3xl text-white ">
            Kan<span className="text-[#e94560]">9ala</span>{" "}
          </h1>
          <p className="mt-8 text-justify">
            Where Style Meets Comfort. Discover fashion-forward clothing and
            accessories that prioritize quality, affordability, and
            sustainability. Elevate your wardrobe with Kan9ala today.
          </p>
          <div className="hidden lg:flex justify-between mt-6">
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i className="fa-brands fa-google-play mr-2"></i>
              <span>Google Play</span>
            </button>
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i className="fa-brands fa-app-store-ios mr-2"></i>
              <span>App Store</span>
            </button>
          </div>
        </div>

        {/* about us */}
        <div className=" mt-6 border-y border-gray-500 py-3 lg:py-0 lg:border-none lg:mt-4">
          <h2
            className="text-gray-300 lg:text-white font-bold flex justify-between items-center lg:flex-none  lg:text-lg"
            onClick={() => toggleCollapse(1)}
          >
            About Us
            <i className="fa-solid fa-caret-down lg:hidden"></i>
          </h2>
          <Collapse isOpened={open === 1}>
            <div>
              <ul className="leading-8 pt-5">
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Collapse>
          <div className="hidden lg:flex">
            <ul className="leading-8 pt-5">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        {/* customer core */}
        <div className=" border-b border-gray-500 py-3 lg:py-0 lg:border-none lg:mt-4">
          <h2
            className="text-gray-300 lg:text-white font-bold  flex justify-between items-center lg:flex-none  lg:text-lg"
            onClick={() => toggleCollapse(2)}
          >
            Customer Care
            <i className="fa-solid fa-caret-down lg:hidden"></i>
          </h2>
          <Collapse isOpened={open === 2}>
            <div>
              <ul className="leading-8 pt-5">
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </div>
          </Collapse>
          <div className="hidden lg:flex">
            <ul className=" leading-8 pt-5">
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
        </div>
        {/* contact us */}
        <div className=" border-b border-gray-500 py-3 lg:py-0 lg:border-none lg:mt-4">
          <h2
            className="text-gray-300 lg:text-white font-bold flex justify-between items-center lg:flex-none lg:text-lg"
            onClick={() => toggleCollapse(3)}
          >
            Contact Us
            <i className="fa-solid fa-caret-down lg:hidden"></i>
          </h2>
          <Collapse isOpened={open === 3}>
            <div>
              <ul className="leading-8 pt-5">
                <li>
                  Amjdadar Ikniouen Tinghir,
                  <br /> Morocco, Zip 45302{" "}
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  Kan9ala.help@gmail.com
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i> +1 1123 456 780
                </li>
              </ul>
            </div>
          </Collapse>
          <div className="hidden lg:flex">
            <ul className="leading-8 pt-5">
              <li>
                Amjdadar Ikniouen Tinghir,
                <br /> Morocco, Zip 45302{" "}
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> Kan9ala.help@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +1 1123 456 780
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" lg:hidden flex justify-between mt-6">
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i className="fa-brands fa-google-play mr-2"></i>
              <span>Google Play</span>
            </button>
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i className="fa-brands fa-app-store-ios mr-2"></i>
              <span>App Store</span>
            </button>
          </div>
      <div className="relative flex py-5 items-center mt-6">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex items-center space-x-6 text-gray-400 px-4">
          <i className="fab fa-facebook-f text-2xl"></i>
          <i className="fab fa-twitter text-2xl"></i>
          <i className="fab fa-instagram text-2xl"></i>
          <i className="fab fa-youtube text-2xl"></i>
        </div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </footer>
  );
}

export default Footer;
