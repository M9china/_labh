"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Filters } from "./Filters";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Placeholder } from "../Home/Placeholder";

export const OurCollection = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: any) => {
    event.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <div className="bg-white pt-[5rem]">
        {/** Search bar */}
        <form
          className="relative sm:hidden flex flex-1 mx-4 rounded-lg"
          onSubmit={handleSearch}
          method="GET"
        >
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            className="pointer-events-none mt-2 absolute pl-2 inset-y-0 left-0 h-8 w-8 text-black"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-3 pl-[3rem] pr-0 rounded-full bg-gray-100 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="search"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        {/* Mobile filter dialog */}
        <Filters />
        <Placeholder/>
      </div>
      <div></div>
    </>
  );
};
