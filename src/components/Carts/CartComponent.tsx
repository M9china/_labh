"use client";
import Image from "next/image";
import {

  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import { Checkout } from "./Checkout";
import useCart from "../Hooks/useCart";
import { IItem } from "../Collection";
import Link from "next/link";

export const CartComponent = () => {
  const cartList = useCart();

  return (
    <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8 bg-white mt-5">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Cart
      </h1>
      <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>
          <ul
            role="list"
            className="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            {cartList.cart?.bucket.map((product: IItem, productIdx: number) => (
              <li key={product.productId} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <Image
                    height={1500}
                    width={1500}
                    alt={product.name}
                    src={product.image || "/"}
                    className="h-28 w-28 rounded-md object-cover border object-center sm:h-48 sm:w-48"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <h1 className="font-medium text-lg text-gray-700 hover:text-gray-800">
                            {product.name}
                          </h1>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className=" border-gray-200 text-gray-500">
                          {product.color}
                        </p>

                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                          {product.size}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-500">Qty, {product.quantity}</p>

                      <p className="mt-1 text-md font-medium text-gray-900">
                        R {product.price}
                      </p>                    </div>
                    <div className="mt-2 sm:mt-0 sm:pr-9">
                      <div className="absolute right-0 top-0">
                        <button
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          <XMarkIconMini
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </form>
      <div className="text-center mt-5">
        <Link className="font-semibold text-blue-500" href={"/collection"}>
          -continue shopping-
        </Link>
      </div>
      <Checkout />
    </main>
  );
};
