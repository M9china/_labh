import Image from "next/image";
import Link from "next/link";

export const Category = () => {
  
  return (
    <section aria-labelledby="category-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-semibold text-gray-800 hover:text-gray-600 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              width={1500}
              height={1500}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              src="/l.a.b.h.jpeg"
              className="object-cover rounded-md object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-black">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    New Arrivals
                    <p aria-hidden="true" className="mt-1 text-sm text-black">
                      Shop now
                    </p>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              width={1500}
              height={1500}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              src="/blacklabh.jpeg"
              className="object-cover rounded-md object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-black">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    Best Selling
                    <p aria-hidden="true" className="mt-1 text-sm text-black">
                      Shop now
                    </p>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              width={1500}
              height={1500}
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="/labhats.png"
              className="object-cover rounded-md object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-black">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    Head Wear
                    <p aria-hidden="true" className="mt-1 text-sm text-black">
                      Shop now
                    </p>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="block text-sm font-semibold text-gray-800 hover:text-gray-600"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
