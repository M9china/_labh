'use client';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { allItems } from "./FilterStaticData";
import Image from "next/image";
import { IItem } from "./FilterDto";
import { useState } from "react";
import { CartNotification } from "../Overlays";
import useCart from "../Hooks/useCart";

export const SelectedItem: React.FC<IItem> = ({ productId }) => {
  const router = useRouter();
  const { id } = useParams();
  const [isAdded, setIsAdded] = useState(false); 
  const { setCart } = useCart();


  // Find the item based on the ID from the URL
  const item = Object.values(allItems)
    .flat()
    .find((i) => i.productId === id);

  if (!item) {
    return <p>Item not found.</p>;
  }

  const handleAddToCart = () => {
      setCart.mutate({
          productId: item.productId,
          quantity: 1 
      });
      setIsAdded(true);
  };

  return (
    <div className="pt-[5rem] bg-white px-4">
      <button
        onClick={() => router.push("/collection")}
        className="flex rounded text-black space-x-2 cursor-pointer items-center"
      >
        <ArrowLeftIcon className="h-4 w-4 font-semibold mr-2" />
        <span className="text-md mr-4 font-semibold">Collection</span>
      </button>
      <div className="mt-5">
        <Image
          className="h-[23rem] rounded object-cover"
          src={item.image as string}
          width={1500}
          height={1500}
          alt={`${item.name} image`}
        />
        <div className="text-black mt-5 flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-semibold">{item.name}</p>
            <p className="font-semibold mt-2">R {item.price}</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
        {isAdded && <CartNotification/>}
        <div className="bg-blue-600 text-white rounded flex justify-center mt-5">
          <button
            onClick={handleAddToCart}
            className="font-semibold rounded px-4 py-3 flex space-x-1 items-center"
          >
            <span>Add to cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
