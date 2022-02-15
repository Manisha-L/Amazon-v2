import React from "react";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";
import Currency from "react-currency-formatter";

function CheckoutProduct({ image, title, description, price }) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ title }));
  };
  return (
    <div className="ml-1 xs:ml-5 ">
      <div className="flex w-[100%] h-[50%]  my-3 ">
        <div className="w-[40%] xs:w-[30%]  xs:px-5 md:w-[20%]">
          {/* <div className="w-[90%] h-[70%] xs:w-[100%] "> */}
          <img src={image} className="w-full h-full object-contain" />
          {/* </div> */}
        </div>
        <div className="flex flex-col w-[75%]  sm:flex-row ">
          <div className="xs:w-[80%]">
            <h3 className="text-md font-semibold  line-clamp-1">{title}</h3>
            <h3 className="line-clamp-2 text-sm mt-2">{description}</h3>
            {/* <button>
              <div className="dropdown">Qty: 3</div>
            </button> */}

            <span className="text-[#ddd]">|</span>
            <button
              onClick={removeItemFromBasket}
              className="text-[#007185] text-xs xs:mt-5"
            >
              Delete
            </button>
          </div>
          <h3 className="xs:w-[20%]   font-bold">
            <Currency quantity={price} currency="GBP" />
          </h3>
        </div>
      </div>
      <hr className="mx-5" />
    </div>
  );
}

export default CheckoutProduct;
