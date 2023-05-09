import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function CarditCard() {
  return (
    <div>
      <HeaderNavbar />
      <div>
        <div className="bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-1">
            <>
              <div className="relative flex items-center space-x-3   bg-white px-6 py-5 shadow-sm ">
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <div className="overflow-hidden bg-white ">
                    <div className="mx-auto md:px-6 lg:px-8">
                      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                        <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                          <div className="mx-auto  lg:mx-0 ">
                            <h2 className="text-base lg:ml-4 leading-7 font-bold">
                            Order #: uxz736d
                            </h2>
                            {/* ------------ card will come here ---------  */}
                            <div class="container px-5 py-4 mx-auto flex">
                              <div class="  bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                                  Credit or Debit Card
                                </h2>

                                <div class="relative mb-4">
                                  <label
                                    for="email"
                                    class="leading-7 text-sm text-gray-600"
                                  >
                                   Card Number
                                  </label>
                                  <input
                                  placeholder="1234  5678 9012 3456"
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                  />
                                </div>
                                <div class="flex flex-wrap -m-2">
                                  <div class="p-2 w-1/2">
                                    <div class="relative">
                                      <label
                                        for="name"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                       Expiration date
                                      </label>
                                      <input
                                      placeholder="MM/JJ"
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                  </div>
                                  <div class="p-2 w-1/2">
                                    <div class="relative">
                                      <label
                                        for="email"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        CVC / CVV
                                      </label>
                                      <input
                                      placeholder="123"
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="relative mb-4">
                                  <label
                                    for="email"
                                    class="leading-7 text-sm text-gray-600"
                                  >
                                 Name on the Card
                                  </label>
                                  <input
                                  placeholder="Abc. abc"
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                  />
                                </div>
                                <button class="text-white bg-orange-500 font-bold border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Pay €  47.87
                                </button>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sm:px-6 lg:px-0">
                          <div className="relative isolate overflow-hidden  px-6 pt-8 sm:mx-auto sm:max-w-2xl  sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div
                              className="absolute   w-full   bg-indigo-100 opacity-20 "
                              aria-hidden="true"
                            />
                            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                              <img
                                src="./images/delivery.png"
                                alt="Product screenshot"
                                className=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
