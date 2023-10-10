import chroma from "chroma-js";
const colourOptions = [
  { value: "ocean", label: " ", color: "#00B8D9" },
  { value: "blue", label: " ", color: "#0052CC" },
  { value: "purple", label: " ", color: "#5243AA" },
  { value: "red", label: " ", color: "#FF5630" },
  { value: "orange", label: " ", color: "#FF8B00" },
  { value: "yellow", label: " ", color: "#FFC400" },
  { value: "green", label: " ", color: "#36B37E" },
  { value: "forest", label: " ", color: "#00875A" },
  { value: "silver", label: " ", color: "#666666" },
];
const brandOptions = [
  { value: "Nike", label: "Nike" },
  { value: "Adidas", label: "Adidas" },
  { value: "Puma", label: "Puma" },
  { value: "Reebok", label: "Reebok" },
  { value: "New Balance", label: "New Balance" },
];

const sortByOptions = [
  {
    value: "Popularity",
  },
  {
    value: "Newest",
  },
  {
    value: "Price: Low to High",
  },
  {
    value: "Price: High to Low",
  },

  {
    value: "Name",
  },

];

// styles for color select
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: "white",
      backgroundColor: data.color,
      display: "inline-block",
      textAlign: "center",
      margin: "2px",
      width: "23.35%",
      height: "30px",
      textAlign: "center",
      margin: "2px",
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: data.color,
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "white",
    /* height */
    height: "27px",
    width: "18px",
    textAlign: "center",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
// style for brand options
const brandStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: "black",
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#2563EB",
      borderRadius: "4px",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "white",
    backgroundColor: "#2563EB",
    /* height */
    height: "27px",
    width: "fit-content",
    textAlign: "center",
    borderRadius: "4px",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "white",
    color: "white",
    backgroundColor: "#2563EB",
    ":hover": {
      backgroundColor: "#2563EB",
    },
  }),
};

export {
  colourOptions,
  brandOptions,
  colourStyles,
  brandStyles,
  sortByOptions,
};
