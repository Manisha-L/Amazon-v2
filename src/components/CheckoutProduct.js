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
    <div className=" xs:ml-5">
      <div className="flex w-[100%] h-[50%] my-3 ">
        <div className="w-[50%] xs:w-[25%] xs:px-5">
          <div className="w-20 h-20 xs:w-40 xs:h-40 ">
            <img src={image} className="w-full h-full object-contain" />
          </div>
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
          <h3 className="xs:w-[20%] xs:ml-5 xs:text-center font-bold">
            <Currency quantity={price} currency="GBP" />
          </h3>
        </div>
      </div>
      <hr className="mx-5" />
    </div>
  );
}

export default CheckoutProduct;
