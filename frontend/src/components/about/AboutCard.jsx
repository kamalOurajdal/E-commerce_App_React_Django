import React from "react";

function AboutCard({data}) {
  return (
    <div className="bg-white rounded-md shadow-md pb-4 mb-4">
      <img src={data.image} alt="" className="rounded-t-md" />
      <h1 className="font-bold text-xl my-4 px-4 text-gray-800">{data.title}</h1>
      <p className="px-4 text-gray-500">{data.desc}</p>
    </div>
  );
}

export default AboutCard;
