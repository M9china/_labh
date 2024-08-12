import Link from "next/link"
import { FOOTERDATA } from "./NavStatic"

export const Footer = () => {

    return(
        <footer className="bg-white" aria-labelledby="footer-heading mx-0 sm:px-0">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="sm:pt-24 px-2 mx-0 sm:px-0 lg:pt-32">
          <div className=" border-t-2 sm:border-t sm:pt-8 border-gray-900/10 pt-5 xl:grid xl:grid-cols-2 xl:gap-8">
            <div className="grid lg:px-8 grid-cols-4 gap-8 xl:col-span-2">
                <div className="sm:mt-0 mt-4 col-span-2">
                  <h3 className="text-md font-semibold leading-6 text-gray-600 sm:text-gray-900">
                    Company Info
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {FOOTERDATA.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-[#7F1011]"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              
                <div className="sm:mt-0 mt-4 col-span-1">
                  <h3 className="text-md font-semibold leading-6 text-gray-600 sm:text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {FOOTERDATA.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-[#7F1011]"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:mt-[10.2rem] mt-6 md:mt-0 col-span-1">
                  <h3 className="text-md font-semibold leading-6 text-gray-600 sm:text-gray-900">
                    Contact
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {FOOTERDATA.legal.map((item) => (
                      <li key={item.name}>
                        {item.name === "+27 22 000 0000" ? (
                          <Link
                            href="tel:+27220000000"
                            className="text-sm leading-6 text-gray-600 hover:text-[#7F1011]"
                          >
                            {item.name}
                          </Link>
                        ) : item.name === "hello@opherlabs.co.za" ? (
                          <Link
                            href="hello@opherlabs.co.za"
                            className="text-sm leading-6 text-gray-600 hover:text-[#7F1011]"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-sm leading-6 text-gray-600 hover:text-[#7F1011]"
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
             
            </div>
          </div>
          <div className=" sm:border-t border-gray-900/10 pt-8 sm:mt-10 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
              Copyright &copy; {new Date().getFullYear()} Hluzingqondo, Inc. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}