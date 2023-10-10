import React from "react";

function Categories({toggleCategorie}) {
  // categories variable
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      icon: "fas fa-female",
    },
    {
      id: 2,
      name: "Men's Fashion",
      icon: "fas fa-male",
    },
    {
      id: 3,
      name: "Phones & Telecommunications",
      icon: "fa-solid fa-mobile-button",
    },
    {
      id: 4,
      name: "Home, Pet & Appliances",
      icon: "fa-solid fa-couch",
    },
    {
      id: 5,
      name: "Consumer Electronics",
      icon: "fa-solid fa-lightbulb",
    },
    {
      id: 6,
      name: "Jewelry & Watches",
      icon: "fa-solid fa-gem",
    },
    {
      id: 7,
      name: "Bags & Shoes",
      icon: "fa-solid fa-bag-shopping",
    },
    {
      id: 8,
      name: "Toys , Kids & Babies",
      icon: "fa-solid fa-baby-carriage",
    },
    {
      id: 9,
      name: "Beauty, Health & Hair",
      icon: "fa-solid fa-wand-magic-sparkles",
    },
    {
      id: 10,
      name: "Sports Accessories",
      icon: "fa-solid fa-volleyball",
    },
  ];
  return (
    <section className="bg-white w-fit h-[65vh] md:h-[70vh] shadow-md shadow-gray-400 mr-2 flex flex-col justify-between py-5 ">
      <h1 className="text-sm font-bold text-gray-700 px-4 hidden md:flex"><i className="fa-solid fa-list mr-2 "></i> Categories</h1>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={toggleCategorie}
          className="text-left text-sm pl-4 w-full my- py-2 hover:bg-rose-100 transform duration-300 ease-in px-1"
        >
          <i className={`${category.icon} mr-2 text-gray-400` } ></i> {category.name}
        </button>
      ))}
    </section>
  );
}

export default Categories;
