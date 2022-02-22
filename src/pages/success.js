import React from "react";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen relative">
      <Header />

      <div className="bg-white w-full md:w-[50%]  absolute top-[20%] md:left-[25%]  p-5">
        <div className="flex">
          <CheckCircleIcon className="w-7 h-7 text-[#067D62]" />
          <h1 className="text-black font-bold text-xl">
            Thank you, your order has been confirmed!
          </h1>
        </div>
        <p className="mt-3 text-sm font-medium">
          Thank you for shopping with us. We'll send a confirmation once your
          item has shipped. If you would like to check the status of your
          order(s), please click the link below.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/orders")}
            className=" mt-6 px-5 lg:px-52 py-1 text-sm   font-bold rounded-sm border border-yellow-300  bg-gradient-to-b from-yellow-200 to-yellow-400  active:from-yellow-500"
          >
            Go to my orders
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default success;
