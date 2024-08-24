import Image from "next/image";
import Link from "next/link";
import { Category, Discount, Favorites } from "../Carts";

export const Hero = () => {
  return (
    <div className="bg-white sm:w-full w-screen">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 bg-white mt-5">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold leading-[2.5rem] tracking-tight text-gray-900 sm:text-6xl">
              {`Let's All Be Happy is finally here!`}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {`This year, our new collection will shelter you from the harsh
              elements of a world that doesn't care if you live or die.`}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          width={1500}
                          height={1500}
                          alt=""
                          src="/labh (10).jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={1500}
                          height={1500}
                          alt=""
                          src="/labh (2).jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={1500}
                          height={1500}
                          alt=""
                          src="/labh (6).jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={1500}
                          height={1500}
                          alt=""
                          src="/labh (20).jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={1500}
                          height={1500}
                          alt=""
                          src="/labh (4).jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="sm:grid hidden flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={1500}
                          height={1500}
                          alt=""
                          src="/labh (2).jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={1500}
                          height={1500}
                          alt=""
                          src="/labh (9).jpeg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/collection"
                className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-gray-700"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Category />
      </section>
      <section>
        <Favorites />
      </section>
      <section>
        <Discount />
      </section>
    </div>
  );
};