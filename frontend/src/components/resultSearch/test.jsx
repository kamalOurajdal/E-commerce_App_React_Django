import React, { useState } from 'react'
import ReactSlider from "react-slider";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { brandOptions, colourOptions, colourStyles } from './DataFilter';


function FilterSearchResult() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  
  const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
  };
  
  const handleChangeBrand = (selectedBrand) => {
      setSelectedBrand(selectedBrand);
  };
  


  return (
      <div className="data-filter w-72 flex-col">
      <div className="">
          <h1 className="">Brand:</h1>
          <Select
          className=""
          value={selectedBrand}
          onChange={handleChangeBrand}
          options={brandOptions}
          />
      </div>
      <div className="">
          <h1 className="">Color:</h1>
          <Select
          className=""
          value={selectedOption}
          onChange={handleChange}
          options={colourOptions}
          styles={colourStyles}
          isMulti
          />
      </div>
      </div>
  );
}

export default FilterSearchResult
