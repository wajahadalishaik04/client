import React from "react";

const ProductCard = ({ title, description, price }) => {
  return (
    <>
      <div className="w-96 p-4 flex flex-row rounded-lg gap-3 justify-between flex-wrap h-5/6 bg-slate-300">
        <div className="">
          <h1 className="text-2xl font-normal p-1 mt-1 ">
            Product Name: {title}
          </h1>
          <p className="px-1 text-gray-500 ">
            Product Description:{description}
          </p>
          <span className="px-1 text-gray-500"> Price:{price}</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
