import Image from "next/image";
import Product from "./Product";
import { useState } from "react";

function ProductList({ products }) {
  return (
    <div className="absolute top-[30%] xxs:top-[35%] xs:top-[50%]   w-full z-20 pointer-events-none bg-gradient-to-b from-transparent  to-gray-100 ">
      <div className=" flex flex-wrap justify-evenly mx-3  ">
        {products.slice(0, 4).map((product, i) => {
          return (
            <Product
              category={product.category}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          );
        })}
        <div className="w-full sm:w-[95%] h-full">
          <img
            src="./prod-img.jpg"
            alt="small banner"
            width="100%"
            height="100%"
            className=" object-contain"
          />
        </div>
        {products.slice(4, products.length).map((product) => {
          return (
            <Product
              category={product.category}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
