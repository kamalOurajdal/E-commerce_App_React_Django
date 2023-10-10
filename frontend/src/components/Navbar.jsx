import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { Link, Outlet } from "react-router-dom";
import Categories from "./home/Categories";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const toggleCategorie = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const productDropdown = (
    <div
      className={`h-0 py-0 group-hover:block group-hover:h-20 top-5 transform-w duration-500 ease-in-out 
      overflow-hidden  absolute z-40 text-xs bg-white   w-48  rounded-lg shadow-md text-gray-600`}
    >
      <div className="w-full space-y-4 pt-4">
        <Link
          to="/products/new"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          New products <i className="fa-solid fa-caret-right"></i>
        </Link>
        <Link
          to="/products/top-sellers"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Our top sellers <i className="fa-solid fa-caret-right"></i>
        </Link>
      </div>
    </div>
  );
  const dealDropdown = (
    <div
      className={`h-0 py-0 group-hover:block group-hover:h-28 
      top-5 transform-w duration-500 ease-in-out overflow-hidden 
       absolute z-40 text-xs  bg-white   w-48  rounded-lg shadow-md text-gray-600`}
    >
      <div className="w-full space-y-4 pt-4 ">
        <Link
          to="search?under=5"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Solutions under 5$ <i className="fa-solid fa-caret-right"></i>
        </Link>
        <Link
          to="search?under=7.5"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Solutions under 7.5$ <i className="fa-solid fa-caret-right"></i>
        </Link>
        <Link
          to="search?under=10"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Solutions under 10$ <i className="fa-solid fa-caret-right"></i>
        </Link>
      </div>
    </div>
  );

  const NavBarComputer = () => {
    return (
      <nav className="w-full relative h-full text-sm flex justify-end">
        <div className="flex items-center  text-black">
          <Link to="/" className="mx-4 hover:text-rose-500">
            Home
          </Link>
          <div className="relative group">
            <p className="mx-4 group-hover:text-rose-500 cursor-pointer ">
              Products{" "}
              <i
                className={`group-hover:rotate-180 fa-solid fa-caret-up ml-1 transform duration-300 ease-in-out`}
              ></i>
            </p>
            {productDropdown}
          </div>
          <div className="relative group">
            <p className="mx-4 group-hover:text-rose-500 cursor-pointer ">
              Deals{" "}
              <i
                className={`group-hover:rotate-180 fa-solid fa-caret-up ml-1 transform duration-300 ease-in-out`}
              ></i>
            </p>
            {dealDropdown}
          </div>
          <Link to="/about" className="mx-4 hover:text-rose-500">
            About
          </Link>
          <Link to="/contact" className="mx-4 hover:text-rose-500">
            Contact
          </Link>
          <Link to="/help" className="ml-4 hover:text-rose-500">
            Help Center
          </Link>
          <Outlet />
        </div>
      </nav>
    );
  };
  const NavbarMobile = () => {
    return (
      <nav
        className={`${
          isMenuOpen ? " right-0 p-4" : "-right-[414px]"
        } fixed top-0  shadow-md  z-50  h-screen w-screen text-sm  flex flex-col justify-center items-center rounded-md bg-white `}
      >
        <div className="text-2xl font-bold flex justify-between w-full items-center absolute top-4 px-4 left-0">
          <h1>
            Kan<span className="text-[#e94560]">9ala</span>{" "}
          </h1>
          <h1 className="text-red-500" onClick={toggleIsMenuOpen}>
            x
          </h1>
        </div>
        <div className="  flex  flex-col  space-y-8 text-lg   text-black">
          <Link
            to="/"
            className=" hover:text-rose-500"
            onClick={toggleIsMenuOpen}
          >
            Home
          </Link>
          <div className="relative group">
            <p
              className={`${
                open === 1 ? "text-rose-500" : " "
              }  cursor-pointer`}
              onClick={() => toggle(1)}
            >
              Products{" "}
              <i
                className={`${
                  open === 1 ? "rotate-180 " : " rotate-0"
                } fa-solid fa-caret-up ml-1  duration-300 ease-in-out`}
              ></i>
            </p>
            <Collapse isOpened={open === 1}>
              <div className=" space-y-4 py-2 ">
                <Link
                  to="/products/new"
                  className="flex items-center  px-4  hover:text-rose-500"
                  onClick={toggleIsMenuOpen}
                >
                  New products <i className="fa-solid fa-caret-right ml-2"></i>
                </Link>
                <Link
                  to="/products/top-sellers"
                  className="flex items-center  px-4  hover:text-rose-500"
                  onClick={toggleIsMenuOpen}
                >
                  Our top sellers{" "}
                  <i className="fa-solid fa-caret-right ml-2"></i>
                </Link>
              </div>
            </Collapse>
          </div>
          <div className="relative ">
            <p
              className={`${
                open === 2 ? "text-rose-500" : " "
              }  cursor-pointer`}
              onClick={() => toggle(2)}
            >
              Deals{" "}
              <i
                className={`${
                  open === 2 ? "rotate-180 " : " rotate-0"
                } fa-solid fa-caret-up ml-1 transform duration-500 ease-in-out`}
              ></i>
            </p>
            <Collapse isOpened={open === 2}>
              <div className="w-full space-y-4 py-2  ">
                <Link
                  to="search?under=5"
                  className="flex items-center  px-4  hover:text-rose-500"
                  onClick={toggleIsMenuOpen}
                >
                  Solutions under 5${" "}
                  <i className="fa-solid fa-caret-right ml-2"></i>
                </Link>
                <Link
                  to="search?under=7.5"
                  className="flex items-center  px-4  hover:text-rose-500"
                  onClick={toggleIsMenuOpen}
                >
                  Solutions under 7.5${" "}
                  <i className="fa-solid fa-caret-right ml-2"></i>
                </Link>
                <Link
                  to="search?under=10"
                  className="flex items-center  px-4  hover:text-rose-500"
                  onClick={toggleIsMenuOpen}
                >
                  Solutions under 10${" "}
                  <i className="fa-solid fa-caret-right ml-2"></i>
                </Link>
              </div>
            </Collapse>
          </div>
          <Link
            to="/about"
            className=" hover:text-rose-500"
            onClick={toggleIsMenuOpen}
          >
            About
          </Link>
          <Link
            to="/contact"
            className=" hover:text-rose-500"
            onClick={toggleIsMenuOpen}
          >
            Contact
          </Link>
          <Link
            to="/help"
            className=" hover:text-rose-500"
            onClick={toggleIsMenuOpen}
          >
            Help Center
          </Link>
          <Outlet />
        </div>
      </nav>
    );
  };

  return (
    <nav className="w-full shadow-md relative h-14 text-sm  ">
      <div className="w-[84%] m-auto h-full">
        <div className="hidden h-full md:flex ">
          <NavBarComputer />
        </div>
        <div className="relative h-full  flex  justify-between items-center md:hidden">
          <div
            className="flex items-center font-bold border p-2 rounded-full cursor-pointer"
            onClick={toggleCategorie}
          >
            <i class="fa-solid fa-list  text-gray-500 md:hidden mr-3"> </i>
            Categories
            <i className="fa-solid fa-caret-right ml-2"></i>
          </div>
          <div className="absolute top-14 z-50">
            {isCategoriesOpen && <Categories toggleCategorie = {toggleCategorie}/>}
          </div>

          <i
            class={`${"fa-bars"} fa-solid  cursor-pointer text-xl text-gray-500 md:hidden`}
            onClick={toggleIsMenuOpen}
          ></i>

          {<NavbarMobile />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
