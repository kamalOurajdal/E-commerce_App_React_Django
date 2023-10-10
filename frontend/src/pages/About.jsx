import React from "react";
import AboutCard from "../components/about/AboutCard";
import TeamCard from "../components/about/TeamCard";
import img_followUS from "../media/team/follow_us.jpg";
import TrustInfo from "../components/home/TrustInfo";

function About() {
  const data = [
    {
      title: "About Us",
      image: require("../media/about.jpg"),
      desc: `
      Kan9ala is Morocco's top online shopping platform, 
      offering a superior shopping experience across various 
      categories like fashion, electronics, home appliances, 
      books, sports gear, groceries, and more. We consistently 
      aim to enhance your shopping with unbeatable deals and discounts.`,
    },
    {
      title: "Exceptional Service",
      image: require("../media/service.jpg"),
      desc: `Your satisfaction is at the heart of our vision. 
      We're dedicated to providing a seamless and secure shopping 
      experience. From the moment you browse our platform to the 
      swift delivery of your order, we're here to exceed your 
      expectations at every step.`,
    },
    {
      title: "Community and Sustainability",
      image: require("../media/community.jpg"),
      desc: `Our vision extends beyond commerce.
       We aim to build a vibrant online community, fostering connections 
       among shoppers, brands, and local businesses. Additionally, 
       we are dedicated to sustainable practices, promoting eco-friendly
        products and packaging to create a better tomorrow.`,
    },
  ];

  return (
    <div className="bg-[#f6f9fc] pb-40">
      <div className="w-[84%]  m-auto  py-10">
        <div className=" ">
          <h1 className="text-3xl font-bold mb-8">
            This is Kan<span className="text-[#e94560]">9ala</span>{" "}
          </h1>
          <p className="leading-8 md:w-2/3">
            Our vision is to create a better everyday life for the many people.
            Here you can discover what this means and find out
             who we are, what we do and what we’re working towards.
          </p>
          {/* grid grid-cols-3 gap-6 mt-14 */}
          <div className="text-sm  mt-14 md:grid md:grid-cols-3 md:gap-6  ">
            {data.map((item, index) => (
              <AboutCard key={index} data={item} />
            ))}
          </div>
        </div>
        <div className=" mt-10">
          <h1 className="text-center font-bold text-4xl mb-4">Our Team</h1>
          <p className="text-sm text-justify mb-6 md:w-1/2 m-auto">
            Our team is a diverse group of professionals, each bringing their
            unique expertise to the table to provide you with exceptional
            products and an unforgettable shopping experience.
          </p>
          <TeamCard />
        </div>
        <div
          className="w-full h-60 mt-16 relative flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${img_followUS})` }}
        >
          {/* w-72 bg-[#f6f9fc] m-auto h-full flex flex-col items-center justify-center */}
          <div className="px-4 bg-[#f6f9fc] m-auto h-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-center text-gray-600">
              Follow Us
            </h1>
            {/* flex justify-center items-center space-x-8 text-2xl mt-8 */}
            <div className="flex justify-center items-center space-x-4 text-2xl mt-8">
              <i className="fa-brands fa-facebook text-[#1877F2] "></i>
              <i className="fa-brands fa-twitter text-[#1DA1F2] "></i>
              <i className="fa-brands fa-pinterest text-[#BD081C] "></i>
              <i className="fa-brands fa-linkedin text-[#0A66C2] "></i>
            </div>
          </div>
        </div>
        <TrustInfo />
      </div>
    </div>
  );
}

export default About;
