"use client";
import {
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
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
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from "react";
import { navigation } from "./NavStatic";

export const TopNav = () => {
  const [open, setOpen] = useState(false)

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
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <Image width={1500} height={1500} alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                          </div>
                          <Link href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <Link href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </Link>
              </div>
              <div className="flow-root">
                <Link href="#" className="-m-2 block p-2 font-medium text-gray-900">
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
                  href="#"
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
                  href='/blog'
                  className="p-2 text-black text-sm font-semibold"
                >
                  <span className="sr-only">blog</span>
                  Blog
                  
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
