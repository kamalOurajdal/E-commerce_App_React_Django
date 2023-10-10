import React from "react";

function TrustInfo() {
  const data = [
    {
      cover: <i className="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "Experience global convenience with our lightning-fast worldwide delivery service.",
    },
    {
      cover: <i className="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "Rest assured, your transactions are protected with our secure payment options for worry-free shopping.",
    },
    {
      cover: <i className="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "Shop with confidence knowing that we prioritize your satisfaction and offer a 100% satisfaction guarantee.",
    },
    {
      cover: <i className="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "Enjoy peace of mind with our dedicated 24/7 support team ready to assist you around the clock",
    },
  ];
  return (
    <section className=" grid grid-cols-2 gap-3 mt-10 md:grid-cols-4 md:gap-6">
      {data.map((val, index) => {
        return (
          <div
            className="shadow-md  bg-white rounded-xl  flex flex-col items-center text-center p-2"
            key={index}
          >
            <div className="bg-[#f6f9fc] w-16 h-16 rounded-full text-2xl flex items-center justify-center">
              <i>{val.cover}</i>
            </div>
            <h3 className="my-4 font-medium text-lg ">{val.title}</h3>
            <p className="text-gray-500">{val.decs}</p>
          </div>
        );
      })}
    </section>
  );
}

export default TrustInfo;
