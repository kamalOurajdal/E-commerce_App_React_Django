import React from "react";

function ContactSupport() {
  return (
    <div className=" m-auto flex flex-col items-center mx-4 lg:mx-0 ">
        <div className=" flex  items-center  lg:w-1/2 mb-6">
          <div className="flex-grow border-t  border-gray-300"></div>
          <h1 className="font-bold text-xl mx-4 text-gray-500">Need more help?</h1>
          <div className="flex-grow border-t  border-gray-300"></div>
        </div>
      <div className="w-full lg:w-1/2 bg-[#f6f9fc] px-4 lg:px-10 rounded-md">
        <form action="" className="w-full my-8 ">
          <div className="relative ">
            <input
              type="email"
              name="email"
              className="px-4 shadow-md bg-white peer  border-b outline-none w-full  h-12 rounded placeholder:text-center"
              placeholder=" "
            />
            <label
              for="email"
              className="
              px-4
              absolute 
              -top-5 
              left-0
             peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-3

                
              pointer-events-none
              transition-all transform ease-out"
            >
              Email
            </label>
          </div>

          <div className="mt-10 relative">
            <textarea
              type="textarea"
              name="problem"
              className="px-4 py-3 peer bg-white border-b outline-none w-full  h-40 shadow-md placeholder:text-sm "
              placeholder=" "
            />
            <label
              for="problem"
              className="
              px-4
              absolute 
              -top-5 
              left-0
             peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-3
                
                pointer-events-none
              transition-all transform ease-out"
            >
              Provide details about your issue here.
            </label>
          </div>
          <button
            type="submit"
            className="font-bold  bg-[#FF472E] text-white w-40 rounded-xl mt-2 py-2 hover:bg-[#EC5B6A] transform duration-500 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSupport;
