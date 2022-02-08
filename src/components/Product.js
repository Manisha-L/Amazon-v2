import React from "react";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product({ category, image, title, description, price }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  const addItemtoBasket = () => {
    dispatch(addToBasket({ category, image, title, description, price }));
  };
  return (
    <div className=" relative pointer-events-auto flex w-full xxs:w-[11.8rem]  xs:w-56 sm:w-72  rounded-[0.150rem] bg-white flex-col my-4   items-center  shadow-lg">
      <h3 className="text-xs mb-2 w-full text-right pr-1 pt-1 italic text-gray-400">
        {category}
      </h3>

      <div className="w-40 h-40 mb-3 ">
        <img src={image} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-sm mb-1 line-clamp-1 font-bold px-5 text-center w-full">
        {title}
      </h3>
      <h3 className="line-clamp-2 text-base mb-1  px-5 text-center w-full">
        {description}
      </h3>
      <div className="w-full  px-5 mb-1 flex justify-center ">
        {Array(rating)
          .fill()
          .map((i) => (
            <StarIcon className="h-5 w-4 text-yellow-400 " />
          ))}
      </div>

      <h3 className="mb-16 sm:mb-0 text-md font-semibold text-center w-full px-5 ">
        <Currency quantity={price} currency="GBP" />
      </h3>

      {hasPrime && (
        <div className="flex w-full px-3 mb-12 items-center justify-center">
          <div className="w-3/12">
            <img
              src="prime-logo.png "
              width="100%"
              height="100%"
              className="object-contain"
            />
          </div>
          <p className="hidden  xs:inline-flex whitespace-nowrap text-xs font-semibold text-gray-500 w-8/12  ml-1 ">
            FREE Delivery by Amazon
          </p>
        </div>
      )}

      <button
        onClick={addItemtoBasket}
        className=" absolute bottom-1 px-10 md:px-14 py-1 text-sm font-bold rounded-sm border border-yellow-300 mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400  active:from-yellow-500"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
