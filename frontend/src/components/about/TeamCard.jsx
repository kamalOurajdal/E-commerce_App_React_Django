import React from "react";
import { teamData } from "./teamData";

function TeamCard() {
  const data = teamData;
  return (
    <div className="md:w-[60%] m-auto">
        <div className="grid grid-cols-3 gap-6 ">
          {data.map((item, index) => (
            <div className="bg-white rounded-md shadow-md pb-4 flex flex-col items-center ">
              <img src={item.img} alt="" className="rounded-full w-32 mt-4" />
              <h1 className="font-bold text-xl  px-4 text-gray-800">
                {item.name}
              </h1>
              <h1 className=" text-lg  px-4 text-gray-800">
                {item.job}
              </h1>
              <p className="px-4 text-gray-500">{item.desc}</p>
              <button className="border p-2 rounded border-[#e94560] text-[#e94560]">Contact Me</button>
            </div>
          ))}
        </div>
    </div>
  );
}

export default TeamCard;
