"use client";
import Link from "next/link";
import { useState } from "react";
import { TOPNAVDATA } from "./NavStatic";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gray-50 sm:py-2 fixed z-50 top-0 sm:w-full w-screen">
      <nav
        className="mx-auto flex sm:px-8 items-center justify-between sm:border-b-0 border-b-2"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">labh</span>
          <span className="flex space-x-2 items-center">
            <Image
              alt="labh logo"
              className="h-[4rem] rounded-full w-[4rem]"
              src="/labh.jpeg"
              height={1500}
              width={15000}
            />
            <p className="text-2xl font-bold text-red-900">L.A.B.H</p>
          </span>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {TOPNAVDATA.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg flex items-center font-semibold leading-6 text-gray-600 ${
                pathname === item.href ? "text-red-900 underline" : ""
              }`}
            >
              {item.name}
              <span className="">
                {index === 1 && (
                  <svg
                    className="h-6 w-6 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                )}
              </span>
            </Link>
          ))}
          <Link
            href="/login"
            className="text-md font-semibold leading-6 text-gray-600"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">EduGlory</span>
            </Link>
            <button
              type="button"
              className=" rounded-md mt-5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className=" flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {TOPNAVDATA.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                      pathname === item.href ? "text-[#7F1011]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
};
