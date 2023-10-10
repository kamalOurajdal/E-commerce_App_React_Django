import React, { useState } from "react";
import ShoppingCard from "../components/cart/ShoppingCard";
import SummaryCard from "../components/cart/SummaryCard";
import { Link } from 'react-router-dom';
import SuggestedProduct from "../components/RecommendedProduct";
import RecommendedProduct from "../components/RecommendedProduct";

function Cart({ decrementQty, cartItem, addToCart, setCartItem, addToFavourite }) {
  let totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const handelRemoveProduct = (product) => {
    const updatedProductItems = cartItem.filter(
      (item) => item.id !== product.id
    );
    setCartItem(updatedProductItems);
  };

  return (
    <section className="w-full bg-[#f6f9fc] pb-20  pt-12">
      <div className="px-4 lg:px-0 lg:w-[84%] m-auto">
        {cartItem.length !==0 ? (
          <div>
            <h1 className="text-3xl font-semibold mb-9">Shopping Cart</h1>
            <h6 className="text-gray-500 mb-2">
              {cartItem.length} item in total
            </h6>
            <div className="flex  flex-col-reverse lg:flex-row lg:space-x-8">
              <div className="lg:w-[64%] space-y-4 ">
                {cartItem.map((product, index) => {
                  return (
                    <ShoppingCard
                      key={index}
                      product={product}
                      decrementQty={decrementQty}
                      addToCart={addToCart}
                      handelRemoveProduct={handelRemoveProduct}
                    />
                  );
                })}
              </div>
              <SummaryCard totalPrice={totalPrice} />
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-semibold mb-12">Your bag is empty</h1>
            <h6 className="text-gray-500 mb-2">
              You can add products to your shopping bag, either by searching or
              by{" "}
              <span className="cursor-pointer hover:text-[#e94560]  underline">
                <Link to={"/"}>browsing products</Link>
              </span>
              .
            </h6>
          </div>
        )}
        <RecommendedProduct addToCart={addToCart} addToFavourite={addToFavourite} />
      </div>
    </section>
  );
}

export default Cart;
