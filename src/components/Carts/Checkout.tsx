'use client'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import useCart from '../Hooks/useCart';

export const Checkout = () => {

  const amount = useCart();

    return(
        <form>
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">R {amount.cart?.totalAmount}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <Link href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </dt>
                <dd className="text-sm font-medium text-gray-900">R {amount.cart?.deliveryFee}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <Link href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </dt>
                <dd className="text-sm font-medium text-gray-900">R {amount.cart?.tax}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">R {amount.cart?.orderTotal}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-col items-center">
              <Link
              href={'/checkout'}
                className="w-full  rounded-md mt-6 border text-center border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </Link>
            </div>
          </section>
        </form>
    )
}