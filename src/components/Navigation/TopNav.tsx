"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { navigation } from "./NavStatic";

export const TopNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sm:py-2 bg-white fixed border-b z-50 top-0 sm:w-full w-screen">
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="">

              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                  <Link href={category.href}>
                  <span>{category.name}</span>
                  </Link>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link
                  href="/api/auth/signin"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </Link>
              </div>
              <div className="flow-root">
                <Link
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <nav aria-label="Top" className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex h-16 items-center">
            {/* Logo */}
            <div className=" flex space-x-4 items-center lg:ml-0">
              <Link href="/">
                <span className="sr-only">L.A.B.H</span>
                <Image
                  alt="labh logo"
                  height={1500}
                  width={1500}
                  src="/labh.jpeg"
                  className="h-[3.5rem] w-auto rounded-full"
                />
              </Link>
              <h1 className="text-red-500 sm:block hidden">L.A.B.H</h1>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  href="/api/auth/signin"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </Link>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </Link>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <Link
                  href="/wishlist"
                  className="p-2 text-black text-sm font-semibold"
                >
                  <span className="sr-only">Wish list</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 font-semibold text-black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </Link>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Link href="/cart" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-black font-semibold group-hover:text-gray-500"
                  />
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative block ml-4 sm:hidden rounded-md bg-white p-2 font-semibold text-black lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};