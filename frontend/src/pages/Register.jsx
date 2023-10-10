import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className=" flex flex-col items-center px-4 lg:px-0 lg:flex-row lg:items-start lg:justify-around  pb-20 pt-16 bg-[#f6f9fc]">
      <div>
        <h1 className="text-3xl font-bold mb-10">
          Create a Kan<span className="text-[#e94560]">9ala</span> <br />{" "}
          account
        </h1>
        <p className=" text-gray-500">
          create your kan9ala account and open the door <br className="hidden lg:flex"/> to a whole new
          way of shopping.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"} className="hover:text-[#e94560] cursor-pointer">
            Log in here
          </Link>
        </p>
      </div>
      <div className="w-full lg:w-[45%] mt-8 lg:mt-0  shadow-md   lg:ml-20 py-4 bg-white rounded-xl   flex justify-center items-center">
        <div className="w-full px-5 lg:px-10">
          <p className=" text-left font-semibold text-gray-600">
            Design your personal oasis at Kan9ala. <br /> Plus, it's absolutely
            free to join!
          </p>
          <form action="" className="mt-10 ">
            <div className="relative border border-gray-400 rounded-md px-4">
              <input
                type="text"
                name="username"
                className="peer bg-transparent   outline-none w-full  h-10"
                placeholder=" "
              />
              <label
                for="username"
                className="
                text-sm
                  absolute 
                  left-4 
                  -top-5
                  text-gray-500
                  peer-placeholder-shown:font-normal
                 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:top-2
                    
                  pointer-events-none
                  transition-all transform ease-out"
              >
                first name
              </label>
            </div>
            <div className="relative mt-8 border border-gray-400 rounded-md px-4">
              <input
                type="text"
                name="username"
                className="peer bg-transparent   outline-none w-full  h-10"
                placeholder=" "
              />
              <label
                for="username"
                className="
                text-sm
                  absolute 
                  left-4 
                  -top-5
                  text-gray-500
                  peer-placeholder-shown:font-normal
                 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:top-2
                    
                  pointer-events-none
                  transition-all transform ease-out"
              >
                Last name
              </label>
            </div>
            <div className="relative mt-8 border border-gray-400 rounded-md px-4">
              <input
                type="text"
                name="username"
                className="peer bg-transparent   outline-none w-full  h-10"
                placeholder=" "
              />
              <label
                for="username"
                className="
                text-sm
                  absolute 
                  left-4 
                  -top-5
                  text-gray-500
                  peer-placeholder-shown:font-normal
                 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:top-2
                    
                  pointer-events-none
                  transition-all transform ease-out"
              >
                Email
              </label>
            </div>

            <div className="relative mt-8 flex items-center border border-gray-400 rounded-md px-4">
              <input
                type="password"
                name="password"
                className="peer bg-transparent  outline-none w-full  h-10"
                placeholder=" "
              />
              <label
                for="password"
                className="
                  absolute 
                  text-sm
                  left-4 
                  -top-5 
                  text-gray-500
                  peer-placeholder-shown:font-normal
                 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:top-2
                    
                    pointer-events-none
                  transition-all transform ease-out"
              >
                Password
              </label>
              <i className="fa-regular fa-eye cursor-pointer text-gray-500"></i>
            </div>
            {/* checkbox for news letter and pravcy */}
            <div className="mt-4 flex flex-col space-y-4 ">
              <div className="">
                <label
                  for="news"
                  className="relative text-sm flex items-center space-x-2 text-gray-500 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="news"
                    id="news"
                    className="  outline-none  w-5 h-5 appearance-none border border-gray-500 rounded-sm checked:bg-[#FA462D] peer"
                  />
                  <i className="fa-solid fa-check absolute -left-1 font-bold opacity-0 text-white peer-checked:opacity-100  "></i>
                  <p>I want to receive news and special offers</p>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <label
                  for="privcy"
                  className="relative text-sm flex items-center space-x-2 text-gray-500 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="privcy"
                    id="privcy"
                    className=" outline-none  w-5 h-5 appearance-none border border-gray-500 rounded-sm checked:bg-[#FA462D] peer "
                  />
                  <i className="fa-solid fa-check absolute -left-1 font-bold opacity-0 text-white peer-checked:opacity-100 "></i>
                  <p>I have read and understood the privacy policy</p>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="font-bold text-white  w-full rounded-md mt-4 py-2 bg-[#FA462D] transform duration-500 ease-in-out"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
