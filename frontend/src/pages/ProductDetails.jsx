import React, { useState } from "react";

function ProductDetails() {
  const product = {
    id: 1,
    name: "Nike Air Max 270",
    price: 150,
    cover:
      "https://img.freepik.com/photos-gratuite/image-frontale-realiste-du-sac-dos-rouge-fond-blanc_125540-3474.jpg?w=740&t=st=1695678891~exp=1695679491~hmac=24bceb250c3633df213b5d12715bc198ddf5f78ba5ee3d9bda92e8d9f2824176",
    images: [
      "https://img.freepik.com/photos-gratuite/image-frontale-realiste-du-sac-dos-rouge-fond-blanc_125540-3474.jpg?w=740&t=st=1695678891~exp=1695679491~hmac=24bceb250c3633df213b5d12715bc198ddf5f78ba5ee3d9bda92e8d9f2824176 ",
      "https://img.freepik.com/photos-gratuite/couleur-elegance-violet-femme-luxe_1203-6518.jpg?w=360&t=st=1695678991~exp=1695679591~hmac=5bf5c04f0c99aa084417768acd41ecef9689221afbf1478860d67cf9ac6c9bfd",
      "https://img.freepik.com/photos-gratuite/belle-femme-elegante-mode-luxe-sac-main-bleu_1203-7657.jpg?w=1060&t=st=1695678975~exp=1695679575~hmac=b85e396303d247f06a086c3f2efe6a0665d2580dc883b37fd8f63497427f3ea9",
      "https://img.freepik.com/photos-gratuite/brillant-bleu-elegant-cuir-feminin_1203-6497.jpg?t=st=1695678975~exp=1695679575~hmac=b1998d6177a95443cbb7bb5546a6cbaa187d5170bbcddd98dd884e0add11bf5f",
    ],
    description:
      "The Nike Air Max 270 delivers visible cushioning under every step with updated Nike Air technology. Updated for modern comfort, it nods to the original, 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.",
    rating: 4.5,
    reviews: 12,
    availability: "In Stock",
    brand: "Nike",
  };
  const [selectedImage, setSelectedImage] = useState(product.cover);
  return (
    <section className="bg-white pb-32 pt-12">
      <div className="w-[84%] mx-auto ">
        <div className="flex my-4 space-x-4 ">
          <div className="">
            <div className="  mb-12">
              <div className="w-96 h-96 bg-gray-300">
                <img
                  src={selectedImage}
                  alt=""
                  className="h-full w-full object-cover rounded shadow-md"
                />
              </div>
              <div className="w-full mt-4 mb-4 flex justify-center space-x-2">
                {product.images.map((image, index) => {
                  return (
                    <div className="" key={index}>
                      <img
                        src={image}
                        alt=""
                        className="w-16 h-16 object-cover rounded hover:border  border-black  cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex mb-4">
              <div className="flex items-center">
                <div className="flex items-center text-[#ffcd4e]">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="ml-2 text-sm text-gray-600">
                  ({product.reviews} Reviews)
                </div>
              </div>
              <div className="flex items-center ml-4">
                <div className="text-sm text-gray-600">Brand:</div>
                <div className="ml-2 text-sm text-gray-600">
                  {product.brand}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-xl font-bold mb-2">${product.price}</div>
              <div className="text-sm text-gray-600">
                {product.availability}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-600">Description:</div>
              <div className="text-sm text-gray-600">{product.description}</div>
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-600">Availability:</div>
              <div className="text-sm text-gray-600">
                {product.availability}
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <h1 className="font-bold">Color:</h1>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-red-500"></div>
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                <div className="w-8 h-8 rounded-full bg-green-500"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          {/* Shiping */}
          <div className="border w-1/2 h-fit p-4 rounded-md  space-y-4 bg-white">
            <div className="flex justify-between">
              <h4 className="font-medium">Delivered to</h4>
              <h5 className="text-gray-500 text-sm">Morocco</h5>
            </div>
            <hr />
            <div>
              <h1 className="font-medium">Delivery</h1>
              <h1 className="flex justify-between">
                Shipping: <span className="font-bold text-lg">7.2$</span>
              </h1>
              <h6 className="text-xs">Estimated delivery date: October 25th</h6>
            </div>
            <hr />
            <div>
              <h1 className="font-medium">Return</h1>
              <h6 className="text-xs">Free returns within 14 days</h6>
            </div>
            <hr />
            <div >
              <h1 className="font-medium">Quantity</h1>
              <div className="flex justify-between items-center w-24 mt-2 mb-2">
                <button
                  className="text-xl font-medium bg-[#f6f9fc] text-[#e94560] w-8 h-8 rounded-full border "
                  onClick={() => {}}
                >
                  -
                </button>
                <h1 className="font-semibold text-gray-500">2</h1>
                <button
                  className="text-xl font-medium bg-[#f6f9fc] text-[#e94560] w-8 h-8  rounded-full border "
                  onClick={() => {}}
                >
                  +
                </button>
              </div>
              <hr />
              <div>
                <button className="w-full bg-[#FD384F] p-2 mt-3 text-white font-semibold rounded-md">
                  Buy now
                </button>
                <button className="w-full bg-[#FFE6E7] p-2 mt-3 text-[#FD384F] font-semibold rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
