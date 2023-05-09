import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setMaxRestVal,
  setRestDeliveryVal,
  setRestPickupVal,
} from "../redux/store/actions/menuAction";
import Preloader from "./Preloader";

const files = [
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.willflyforfood.net/wp-content/uploads/2022/05/turkish-food-kisir.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.mazalv.com/wp-content/uploads/antakya-kunefesi-1024x576.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "http://cdn.cnn.com/cnnnext/dam/assets/200402101212-13-best-turkish-foods-testi-kebab.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "http://cdn.cnn.com/cnnnext/dam/assets/200402101212-13-best-turkish-foods-testi-kebab.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.willflyforfood.net/wp-content/uploads/2022/05/turkish-food-kisir.jpg",
  },
  {
    title: "Thong Thai",
    size: "Thai deliciousness",
    source:
      "https://www.mazalv.com/wp-content/uploads/antakya-kunefesi-1024x576.jpg",
  },
  // More files...
];

export default function RestaurantsGrid({
  items,
  filterRating,
  freeDelivery,
  openResturant,
  minimumOrderValue,
  checkMinimumOrderValue,
  loader,
}) {
  const dispatch = useDispatch();

  const FilterItems = (item) => {
    if (filterRating?.value) {
      // console.log("item.overall_rating", item.overall_rating);
      // console.log("filterRating.value", filterRating.value);

      if (
        item.overall_rating <= filterRating.value &&
        item.overall_rating !== filterRating.value
      ) {
        return false;
      }
    }
    if (freeDelivery) {
      if (item.free_delivery !== "1") {
        return false;
      }
    }
    if (openResturant) {
      if (!getSlugFromUrl(item.url)) {
        return false;
      }
    }
    if (checkMinimumOrderValue) {
      if (Number(item.minorder) > Number(minimumOrderValue)) {
        return false;
      }
    }
    return true;
  };

  const redux = useSelector((state) => state);

  const handleOnClick = (minVal, delivery, pickup) => {
    // console.log(minVal, delivery, pickup);
    dispatch(setMaxRestVal(minVal));
    dispatch(setRestDeliveryVal(delivery));
    dispatch(setRestPickupVal(pickup));
  };

  const getSlugFromUrl = (url) => {
    return url.split("/")[4];
  };

  let selectOption = redux.menu.selectValue;

  return loader ? (
    <Preloader />
  ) : (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-6  sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 iphonerotate:grid-cols-2 md:grid-cols-2 xl:gap-x-0 mt-5"
    >
      {items?.filter(FilterItems)?.length > 0 ? (
        items?.filter(FilterItems)?.map((file) => {
          const restaurantUrl = getSlugFromUrl(file.url);
          const ForwardLink = restaurantUrl ? Link : "div";
          return (
            <li
              key={file.image}
              className="relative border-2 lg:w-11/12  rounded-xl focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 "
            >
              <ForwardLink
                to={`/singlerestaurant?resturent_slug=${restaurantUrl}&resturent_code=${file.code}`}
              >
                <div
                  className="group  block  w-full  overflow-hidden rounded-xl bg-gray-100"
                  onClick={() => {
                    console.log(restaurantUrl, file.code);
                    handleOnClick(file.minorder, file.delivery, file.pickup);
                  }}
                >
                  <img
                    src={file.banner}
                    alt=""
                    className="pointer-events-none group-hover:opacity-75 h-24 md:h-36 w-full object-cover object-center"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button>
                </div>
              </ForwardLink>

              {/* ---------------------- card logo -------------------  */}
              <div className="flex justify-between items-center py-2 px-3">
                <div className="card-left ">
                  {/* <p className="pointer-events-none    block truncate lg:text-lg text-sm lg:font-medium text-gray-900">
                  {file.name}
                </p> */}
                  <h1 class="title-font  text-sm lg:text-lg font-medium text-gray-900 mb-1">
                    {" "}
                    {file.name}
                  </h1>
                  <p className="pointer-events-none block text-sm font-sm text-gray-500">
                    Thai deliciousness
                  </p>
                </div>
                <div className="mt-2  ">
                  <img
                    className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                    src={file.image}
                    alt=""
                  />
                </div>
                {/* <div className="inline-flex  mt-2 flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className=" object-cover h-28 w-28 rounded-full"
                    src={file.image}
                    alt="imag not found"
                  />
                </div> */}
              </div>
              {selectOption == "delivery" ? (
                <p className="p-1 pointer-events-none block text-gray-500 py-2 px-3">
                  <div className="flex items-center justify-between">
                    {file.url === "javascript: void(0)" ? (
                      <div className="text-[#FF0000] font-bold text-lg">
                        Closed for delivery
                      </div>
                    ) : (
                      <div className="restaurant-open">
                        <i className="fa-sharp  fa-solid fa-motorcycle  text-sm">
                          <span className="lg:ml-1 font-sans lg:font-semibold font-thin text-sm">
                            €{file.delivery_fee}
                          </span>{" "}
                        </i>

                        <i class="fa-solid ml-1 fa-clock text-sm">
                          <span className="lg:ml-1 font-sans lg:font-semibold font-thin text-sm">
                            {" "}
                            {file.deliveryTime}
                          </span>
                        </i>

                        <i class="fa-solid fa-cart-plus text-sm">
                          <span className="lg:ml-1 font-sans lg:font-semibold font-thin text-sm">
                            <span> Min € {file.minorder}</span>
                          </span>
                        </i>
                      </div>
                    )}

                    <div className="ratingDiv">
                      <span className="flex items-center border-2 lg:font-semibold font-thin rounded-lg lg:p-1 lg:m-1 text-end">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="lg:w-5 lg:h-6 w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>

                        <span className="text-gray-600 ml-1 lg:text-lg text-sm">
                          {file.overall_rating}
                        </span>
                      </span>
                    </div>
                  </div>
                </p>
              ) : (
                <p className="p-1 pointer-events-none block text-gray-500 py-2 px-3">
                  <div className="flex items-center justify-between">
                    {file.url === "javascript: void(0)" ? (
                      <div className="text-[#FF0000] font-bold text-lg">
                        Closed for delivery
                      </div>
                    ) : (
                      <div className="restaurant-open">
                        <i className="fa-sharp  fa-solid fa-motorcycle text-gray-600">
                          <span className="lg:ml-1 font-sans lg:font-semibold font-thin ">
                            {file.distance}
                          </span>{" "}
                        </i>
                      </div>
                    )}

                    <div className="ratingDiv">
                      <span className="flex items-center border-2 lg:font-semibold font-thin rounded-lg lg:p-1 lg:m-1 text-end">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="lg:w-5 lg:h-6 w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>

                        <span className="text-gray-600 ml-1 lg:text-lg">
                          {file.overall_rating}
                        </span>
                      </span>
                    </div>
                  </div>
                </p>
              )}
            </li>
          );
        })
      ) : (
        <div class=" absolute inset-0 flex items-center mt-[5rem] justify-center z-[-10]">
          <span className="text-lg font-bold text-red-400">
            No Restaurant found!
          </span>
        </div>
      )}
    </ul>
  );
}
