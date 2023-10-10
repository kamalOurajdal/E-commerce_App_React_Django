import React from "react";

function Test({ products }) {
  const allProducts = products

  return (
    <div>
      {allProducts.map((product, index) => (
        <div key={index} className="">
          <h2>{product.name}</h2>

          <p>Price: ${parseFloat(product.price).toFixed(2)}</p>
          <img src={"http://localhost:8000/"+product.cover} alt={product.name} />
         { console.log("cover", product.cover)}
          {console.log("colors:", [product.colors])}
          <p>Colors: {product.colors.map(color => color.color ).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Test;
