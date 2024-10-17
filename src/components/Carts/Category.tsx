import { favorites } from "./PolicyData";
import Link from "next/link";
import Image from "next/image";

export const Category = () => {
  return (
    <section aria-labelledby="favorites-heading">
      <div className="mx-auto max-w-7xl sm:mt-1 mt-[28rem] bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop By Category
          </h2>
          <Link
            href="/collection"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse Collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 relative grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {favorites.map((favorite) => (
            <Link
              href={favorite.href}
              key={favorite.id}
              className="group relative"
            >
              <div className="h-96 w-full overflow-hidden sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <Image
                  width={1500}
                  height={1500}
                  alt={favorite.imageAlt}
                  src={favorite.imageSrc}
                  className="h-full w-full sm:h-[22rem] object-cover object-center"
                />
              </div>
              <div className="sm:mt-6 sm:hidden absolute -mt-[9.5rem] ml-[1rem] ">
                <h1 className='text-2xl text-white font-semibold '>{favorite.title}</h1>
                <p className='text-lg text-white '>{favorite.description}</p>
                <Link
                  href={favorite.href}
                  className="block text-lg mt-4 text-white"
                >
                  <span className='bg-black p-3'>Shop now            
                  <span aria-hidden="true" className="text-white"> &rarr;</span>
                          </span>
                </Link>
              </div>
              {/* <h3 className="mt-4 text-base font-semibold text-gray-900">
                <Link href={favorite.href}>
                  <span className="absolute inset-0" />
                  {favorite.name}
                </Link>
              </h3> */}
              {/* <p className="mt-1 text-sm text-gray-500">{favorite.color}</p> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
