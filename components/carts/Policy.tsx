import { policies } from "./PolicyData";
import Image from 'next/image'

export const Policy = () => {
  return (
    <section
      aria-labelledby="policies-heading"
      className="border-t border-gray-200 bg-gray-50"
    >
      <h2 id="policies-heading" className="sr-only">
        Our policies
      </h2>

      <div className="mx-auto max-w-8xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {policies.map((policy) => (
            <div
              key={policy.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <Image
                    alt=""
                    width={1500}
                    height={1500}
                    src={policy.imageUrl}
                    className="-my-1 mx-auto h-24 w-auto"
                  />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {policy.name}
                </h3>
                <p className="mt-3 text-sm text-gray-500">
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
