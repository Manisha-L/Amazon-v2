import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <div className="fixed z-30 w-full">
      {/* Top Nav */}
      <div className="bg-amazon_blue h-15 flex w-full justify-between items-center  text-xs p-1  py-2 ">
        <div className="w-[75px]  mt-2 ml-2">
          <img
            src="/amazon-logo.png"
            width={100}
            alt="Amazon Logo"
            className="object-contain cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="hidden  sm:flex h-10 focus:border-yellow-400 items-center rounded-md flex-grow ml-2 bg-yellow-400 hover:bg-yellow-500  cursor-pointer">
          <input
            type="text"
            className="w-6 p-2 px-4 h-full flex-grow rounded-l-md text-black font-medium text-base focus:outline-none cursor-pointer"
          />
          <SearchIcon className="h-12 p-4 text-black " />
        </div>
        <div className="mr-2 text-[0.63rem] ml-4 xs:mr-3 flex items-center xs:space-x-3 xs:ml-10 xs:text-xs text-white whitespace-nowrap">
          <div
            onClick={session ? signOut : signIn}
            className="cursor-pointer hover:underline "
          >
            <p>
              {session ? `Hello, ${session.user.name}` : `Hello, ${"Sign In"}`}
            </p>
            <p className=" sm:text-sm font-semibold">Account & Lists</p>
          </div>
          <div className="cursor-pointer hover:underline ml-[7px]">
            <p>Returns</p>
            <p className=" sm:text-sm  font-semibold">& Orders</p>
          </div>
          <div className="flex items-center link relative cursor-pointer hover:underline">
            <div className="bg-yellow-300 rounded-full h-4 w-4 flex items-center justify-center text-black  left-7 absolute top-0 right-0 font-extrabold">
              {items.length}
            </div>
            <ShoppingCartIcon className="h-8" />

            <p
              className="hidden md:inline text-sm font-semibold mt-3"
              onClick={() => router.push("/checkout")}
            >
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div>
        <ul className="text-xs flex  xs:py-1  md:text-xs  cursor-pointer  items-center bg-amazon_blue-light text-white ">
          <li className="flex items-center hover:border border-white-200 rounded-sm p-1 ml-2">
            <MenuIcon className="w-5 xs:w-7 mr-1" />
            All
          </li>
          <li className="hover:border border-white-200 rounded-sm p-0 xs:p-1 m-1">
            Grocery
          </li>
          <li className="hover:border border-white-200 rounded-sm p-0 xs:p-1 m-1">
            Best Sellers
          </li>
          <li className="hover:border border-white-200 rounded-sm p-0 xs:p-1 m-1">
            Gift Ideas
          </li>
          <li className="hidden sm:inline hover:border border-white-200 rounded-sm p-1 m-1">
            Customer Service
          </li>
          <li className="hidden sm:inline hover:border border-white-200 rounded-sm p-1 m-1">
            Today's Deals
          </li>
          <li className="hidden sm:inline hover:border border-white-200 rounded-sm p-1 m-1">
            New Releases
          </li>
          <li className="hidden sm:inline hover:border border-white-200 rounded-sm p-1 m-1 ">
            Vouchers
          </li>
          {/* <li className="hidden sm:inline hover:border border-white-200 rounded-sm p-1 m-1">
           MMM
          </li> */}
          <li className="hidden sm:inline hover:border border-white-200 rounded-sm p-1 m-1">
            PC
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
