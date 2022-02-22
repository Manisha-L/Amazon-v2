import React from "react";
import moment from "moment";
import Currency from "react-currency-formatter";

export default function Order({
  id,
  amount,
  amount_shipping,
  images,
  timestamp,
  items,
}) {
  return (
    <div className=" border border-gray-200 mt-5">
      <div className="flex w-full justify-around  bg-gray-100   py-2 rounded-sm relative">
        <div className="w-[30%]">
          <p className="font-semibold text-sm">ORDER PLACED</p>
          <p className=" text-xs">
            {moment.unix(timestamp).format("DD MMM YYYY")}
          </p>
        </div>
        <div className="w-[30%]">
          <p className="font-semibold text-sm">TOTAL</p>
          <div className=" text-xs">
            <Currency quantity={amount} currency="GBP" />
            <span className=" text-xs">-EXPRESS DELIVERY</span>
            <Currency quantity={amount_shipping} currency="GBP" />
          </div>
        </div>

        <p className="truncate w-[30%] text-xs absolute right-5 top-0">
          Order# {id}
        </p>
        <div className="w-[30%]">
          <p className=" text-blue-500 mt-3 text-sm text-right">
            {items.reduce((q, item) => q + item.quantity, 0)} item(s)
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-auto py-3">
        <div className="flex space-x-10 h-32">
          {images.map((image) => (
            <img src={image} className="object-contain"></img>
          ))}
        </div>
      </div>
    </div>
  );
}
