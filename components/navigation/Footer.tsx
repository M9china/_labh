import Link from "next/link";
import { footerNavigation } from "./NavStatic";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
            {/* Sitemap sections */}
            <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Products</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.products.map((item) => (
                    <Link href={item.href} key={item.name} className="text-sm">
                      <p className="text-gray-500 hover:text-gray-600">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.company.map((item) => (
                    <Link href={item.href} key={item.name} className="text-sm">
                      <p className="text-gray-500 hover:text-gray-600">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Customer Service
                </h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.customerService.map((item) => (
                    <Link href={item.href} key={item.name} className="text-sm">
                      <p className="text-gray-500 hover:text-gray-600">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <h3 className="text-sm font-medium text-gray-900">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-500">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  required
                  autoComplete="email"
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2020 L.A.B.H, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
