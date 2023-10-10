import React, { useState } from "react";
import ReactSlider from "react-slider";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  brandOptions,
  brandStyles,
  colourOptions,
  colourStyles,
  sortByOptions,
} from "./DataFilter";

function FilterSearchResult({ toggleSearchFilter }) {
  const animatedComponents = makeAnimated();
  const Min = 0;
  const Max = 200;

  const [priceRange, setPriceRange] = useState([Min, Max]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [sortByValue, setSortByValue] = useState("default");

  const handleChangeColor = (selectedOption) => {
    setSelectedColor(selectedOption);
  };
  const handleChangeBrand = (selectedBrand) => {
    setSelectedBrand(selectedBrand);
  };

  const handleChangePrice = (e) => {
    const name = e.target.name;
    if (name === "min") {
      e.target.value > 0
        ? setPriceRange([e.target.value, priceRange[1]])
        : setPriceRange(["", priceRange]);
    } else {
      e.target.value > 0
        ? setPriceRange([priceRange[0], e.target.value])
        : setPriceRange([priceRange[0], ""]);
    }
  };

  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const handleSortChange = (value, index) => {
    setSortByValue(value);
    console.log(value);
    toggle(index);
  };

  return (
    <nav className="mx-6 lg:mx-0  lg:flex bg-white rounded-md shadow-md border">
      <div className="lg:w-64 p-4 ">
        <div className="relative">
            <h1 className="text-lg font-semibold text-gray-500">
              {" "}
              <i className="fa-solid fa-filter text-sm"></i> Filters
            </h1>
            <h1 className=" lg:hidden font-bold text-2xl absolute -top-3 -right-1 text-red-500 "
            onClick={toggleSearchFilter}>x</h1>

          <hr />
          <div className="mt-4">
            <h1 className="font-bold">Sort by:</h1>
            <div className="flex flex-wrap">
              {sortByOptions.map((option, index) => (
                <div
                  key={index}
                  className={`${
                    open === index ? "bg-blue-500 text-white" : "bg-white"
                  } text-xs flex-grow space-x-2 w-fit flex items-center cursor-pointer mt-2 border px-4 h-9 rounded`}
                  onClick={() => handleSortChange(option.value, index)}
                >
                  {option.value}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="font-semibold">Price range:</h6>
          <div className="w-full flex  justify-between ">
            <label htmlFor="min">
              Min:
              <input
                type="number"
                id="min"
                name="min"
                className="w-16 px-2 outline-none h-8 border  rounded-med"
                onChange={handleChangePrice}
                value={priceRange[0]}
              />
            </label>
            <label htmlFor="max" className="">
              Max:
              <input
                type="number"
                id="max"
                name="max"
                className="w-16 px-2 outline-none h-8 border rounded-med"
                onChange={handleChangePrice}
                value={priceRange[1]}
              />
            </label>
          </div>
          <ReactSlider
            className=" w-full mt-6 "
            thumbClassName="cursor-pointer w-4 h-4 border border-[#e94560] border-2 bg-[#e94560] rounded-full -top-[6px] outline-none"
            trackClassName="track"
            value={priceRange}
            defaultValue={[20, 80]}
            renderTrack={(props, state) => (
              <div {...props} className={props.className} />
            )}
            renderThumb={(props, state) => (
              <div {...props} className={props.className} />
            )}
            pearling
            min={Min}
            max={Max}
            onChange={setPriceRange}
            minDistance={10}
          />
        </div>
        <div className="mt-16">
          <h1>Brand:</h1>
          <Select
            components={animatedComponents}
            onChange={handleChangeBrand}
            isMulti
            options={brandOptions}
            styles={brandStyles}
          />
        </div>
        <div className="mt-2">
          <h1 className="">Color:</h1>
          <Select
            className=""
            components={animatedComponents}
            value={selectedColor}
            onChange={handleChangeColor}
            options={colourOptions}
            styles={colourStyles}
            isMulti
          />
        </div>
      </div>
    </nav>
  );
}

export default FilterSearchResult;
