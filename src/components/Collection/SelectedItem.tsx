"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { allItems } from "./FilterStaticData";
import Image from "next/image";
import { Color, IItem, Size } from "./FilterDto";
import { useState } from "react";
import { CartNotification } from "../Overlays";
import useCart from "../Hooks/useCart";

export const SelectedItem: React.FC<IItem> = ({ productId }) => {
  const router = useRouter();
  const { id } = useParams();
  const [isAdded, setIsAdded] = useState(false);
  const { setCart } = useCart();
  const availableColors = Object.values(Color);
  const availableSizes = Object.values(Size);

  // State for selected color,quantity and size
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [itemsNumber, setItemsNumber] = useState<number>(1);

  // Find the item based on the ID from the URL
  const item = Object.values(allItems)
    .flat()
    .find((i) => i.productId === id);

  if (!item) {
    return <p>Item not found.</p>;
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }

    setCart.mutate(
      {
        productId: item.productId,
        quantity: itemsNumber,
        price: item.price,
        name: item.name,
        color: selectedColor,
        size: selectedSize,
      },
      {
        onSuccess: () => {
          setIsAdded(true);
        },
      }
    );
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
          src={item.image}
          width={1500}
          height={1500}
          alt={`${item.name} image`}
        />
        <div className="text-black mt-5 flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-semibold text-lg">{item.name}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          {" "}
          <div>
            <label htmlFor={`color-${item.productId}`} className="sr-only">
              Color, {item.name}
            </label>
            <select
              id={`color-${item.productId}`}
              name={`color-${item.productId}`}
              className="max-w-full rounded-md py-1.5 bg-white text-left leading-5 text-gray-600 sm:text-sm"
              value={selectedColor ?? ""}
              onChange={(e) => setSelectedColor(e.target.value as Color)}
            >
              <option value="" disabled>
                Color
              </option>
              {availableColors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`size-${item.productId}`} className="sr-only">
              Size
            </label>
            <select
              id={`size-${item.productId}`}
              name={`size-${item.productId}`}
              className="max-w-full rounded-md py-1.5 bg-white text-left leading-5 text-gray-600 sm:text-sm"
              value={selectedSize ?? ""}
              onChange={(e) => setSelectedSize(e.target.value as Size)}
            >
              <option value="" disabled>
                Size
              </option>
              {availableSizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div>
          <label htmlFor={`quantity-${item.productId}`} className="text-gray-600 mr-2">
            Quantity
          </label>
          <select
            id={`quantity-${item.productId}`}
            name={`quantity-${item.productId}`}
            className="max-w-full bg-white py-1.5 text-left leading-5 text-gray-600 sm:text-sm"
            value={itemsNumber}
            onChange={(e) => setItemsNumber(parseInt(e.target.value))}
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            )}
          </select>
        </div>
        </div>
        
        <div className="text-black">
          <p className="font-semibold mt-2">R {item.price}</p>
        </div>

        {isAdded && <CartNotification />}
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
