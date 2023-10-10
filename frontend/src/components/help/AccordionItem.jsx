import React from "react";
import { Collapse } from "react-collapse";

function AccordionItem({ open, toggle, title, desc }) {
  return (
    <div className="">
      <div
        className={`${open ? "bg-[#FFECEA] text-[#FA462D]":""} p-4 rounded-md bg-white hover:bg-[#FFECEA] hover:text-[#FA462D] 
        cursor-pointer flex  items-center shadow-md transform duration-500 ease-in-out `}
        onClick={toggle}
      >
        <i
          className={`fa-solid fa-chevron-down  duration-200 ease-in-out ${
            open ? "rotate-180" : ""
          }`}
        ></i>
        <h1 className="ml-2">{title}</h1>
      </div>
      <Collapse isOpened={open} >
        <div className={`px-20 py-5 leading-7 bg-white `}>
          <p>{desc}</p>
        </div>
      </Collapse>
    </div>
  );
}

export default AccordionItem;
