import { favorites } from "./PolicyData";
import Link from 'next/link'
import Image from 'next/image'

export const Favorites = () => {
  return (
    <section aria-labelledby="favorites-heading">
      <div className="mx-auto max-w-7xl bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Our Favorites
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="group relative shadow-md rounded p-6">
              <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <Image width={1500} height={1500}
                  alt={favorite.imageAlt}
                  src={favorite.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <Link href={favorite.href}>
                  <span className="absolute inset-0" />
                  {favorite.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{favorite.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="block text-sm font-semibold text-gray-800 hover:text-gray-600"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
