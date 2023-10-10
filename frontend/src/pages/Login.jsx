import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
   
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <section className="m-auto px-4 lg:px-0 h-[78vh] flex flex-col items-center lg:flex-row lg:items-start lg:justify-around pb-20 pt-10
     bg-[#f6f9fc]">
      <div >
        <h1 className="text-3xl font-bold mb-10">
          Log into your Kan<span className="text-[#e94560]">9ala</span> <br />{" "}
          account
        </h1>
        <p className=" text-gray-500 mb-8 lg:mb-0">
          Get a more personalized experience where you don’t need <br className="hidden lg:flex"/> to fill
          in your info every time
        </p>
      </div>
      <div className="w-full mx-4 lg:mx-0  lg:w-[45%]  shadow-md h-96  bg-white rounded-xl   flex justify-center items-center">
        <div className="w-full px-5 lg:px-10">
          <h2 className=" text-left font-semibold text-gray-600">
            Join or log in to kan9ala now for a personalized shopping journey.
          </h2>
          <form action="" className="mt-10 " onSubmit={submitHandler}>
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
                Username
              </label>
            </div>

            <div className="mt-9 relative flex items-center border border-gray-400 rounded-md px-4">
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
              <i class="fa-regular fa-eye cursor-pointer text-gray-500"></i>
            </div>
            <p className="text-right mt-4">
              <a
                href="/forgot-password"
                className="  text-gray-500 hover:text-black duration-300 ease-in-out"
              >
                Forgot password?
              </a>
            </p>
            <button className="font-bold text-[#FF4747]  w-full rounded-md mt-5 py-2 bg-[#FFF1F1] transform duration-500 ease-in-out">
              Login
            </button>
            <Link to={"/register"}>
              <button className="font-bold text-white  w-full rounded-md mt-2 py-2 bg-[#FA462D] transform duration-500 ease-in-out">
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
