"use client";
import { useSearchParams, useRouter } from "next/navigation";
import "./scroll-bar.css";
import { allItems, CategoryKey, filters } from "./FilterStaticData";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Filters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeButton = (searchParams.get("category") ?? "all") as CategoryKey;
  const [filteredItems, setFilteredItems] = useState(allItems.all);

  const handleFilterClick = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`/collection?${params.toString()}`);
  };

  useEffect(() => {
    setFilteredItems(allItems[activeButton]);
  }, [activeButton]);

  return (
    <div>
      <div className="overflow-x-scroll scrollbar-hide">
        {filters.map((item) => (
          <div key={item.id}>
            {item.id === "category" && (
              <div className="flex justify-between items-center mt-5 px-4">
                {item.options.map((x) => (
                  <button
                    key={x.value}
                    onClick={() => handleFilterClick(x.value)}
                    className={`transition-all duration-500 ease-in-out ${
                      activeButton === x.value
                        ? "bg-black rounded-full px-4 py-2 text-white"
                        : "text-gray-500 font-semibold px-4"
                    }`}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <main className="flex flex-col items-center">
        {filteredItems.length > 0 ? (
          <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 sm:pb-10 mt-8 px-4">
            {filteredItems.map((item) => (
              <Link
                href={`/collection/${item.productId}`}
                key={item.productId}
                className=""
              >
                <Image
                  className="h-[15rem] sm:h-[22rem] border w-full object-cover rounded mt-4"
                  alt={`${item.name} image`}
                  src={item.image}
                  width={1500}
                  height={1500}
                />
                <h2 className="text-md text-gray-900 mt-2 sm:text-xl overflow-ellipsis">
                  {item.name}
                </h2>
                <p className="text-md text-black sm:text-lg font-semibold">
                  R {item.price}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <Image
            src="/soon.jpg"
            width={1500}
            height={1500}
            alt="merch coming soon"
            className="mt-12 sm:w-[28rem] sm:pb-8 sm:px-8 sm:h-[23rem] sm:rounded object-cover"
          />
        )}
      </main>
    </div>
  );
};
