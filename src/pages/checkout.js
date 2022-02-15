import React from "react";
import Header from "../components/Header";
import Currency from "react-currency-formatter";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { selectPrice } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession, signIn, signOut } from "next-auth/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectPrice);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) alert(result.error.message);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col-reverse h-full pt-28 sm:flex-row w-full  justify-evenly bg-gray-100">
        {/* Products */}
        <div className="w-[100%] sm:w-[70%]   mt-5 bg-white">
          <h1 className="mb-2 p-3 mx-3 text-2xl font-semibold">
            {items.length === 0
              ? "Your Amazon Basket is empty."
              : "Shopping Basket"}
          </h1>
          <hr className="mx-5" />
          {items.map((item, i) => (
            <CheckoutProduct
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        {/* Total */}
        <div className="w-[100%] sm:w-[25%] h-[75%] p-5 mt-5 bg-white">
          <div className="flex">
            <CheckCircleIcon className="w-7 h-7 text-[#067D62]" />
            <p className="ml-2 text-[#067D62] text-xs ">
              Your order qualifies for <b>FREE Delivery</b> in the UK.
              <a
                className="text-[#007185] ml-1"
                href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=GZXW7X6AKTHNUP6H&pop-up=1"
              >
                Delivery Details
              </a>
            </p>
          </div>
          <p className="text-[#565959] text-xs ml-6">
            Select this option at checkout.
          </p>
          <h1 className="ml-1 font-medium text-lg mt-5">
            Subtotal ({items.length} items):{" "}
            <span className="font-bold">
              <Currency quantity={total} currency="GBP" />
            </span>
          </h1>
          <div className="flex justify-center">
            <button
              role="link"
              onClick={!session ? signIn : createCheckoutSession}
              // onClick={createCheckoutSession}
              className=" mt-8  px-2 md:px-10 py-1 text-sm rounded-lg border border-yellow-300  bg-gradient-to-b from-yellow-200 to-yellow-400  active:from-yellow-500"
            >
              Proceed to Checkout
            </button>
            {/* </form> */}
          </div>
          <p className="text-xs mt-5">
            The price and availability of items at Amazon.co.uk are subject to
            change. The shopping basket is a temporary place to store a list of
            your items and reflects each item's most recent price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
