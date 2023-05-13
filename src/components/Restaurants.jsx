import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import RestaurantsGrid from "./RestaurantsGrid";
import HeaderToggle from "./Header-Toggle";
import HeaderTextSlider from "./HeaderTextSlider";
import OpenResturant from "./OpenResturant";
import RatiingHeader from "./RatiingHeader";
import Modalminimumorder from "./Modalminimumorder";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ModalRating from "./ModalRating";
import { useDispatch, useSelector } from "react-redux";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
const user = {
  name: "Tom Cook",
  email: "tom@Restaurants.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Restaurants() {
  const { t, i18n } = useTranslation();

  const params = new URLSearchParams(window.location.search);
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [restaurantLoader, setRestaurantLoader] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalMinimum, setShowModalMinimum] = useState(false);
  const [minimumOrderValue, setMinimumOrderValue] = useState(0);
  const [checkMinimumOrderValue, setCheckMinimumOrderValue] = useState(false);
  const [value, setValue] = useState("");
  const [freeDelivery, setFreeDelivery] = useState(false);
  const [openResturant, setOpenResturant] = useState(false);
  const [catArray, setCatArray] = useState([]);
  const [filterRating, setFilterRating] = useState({
    current: true,
    title: "Rating 0.0",
    value: "",
  });

  const handleChangeDelivery = () => {
    setFreeDelivery((prev) => !prev);
  };

  const handleChangeOpenResturant = () => {
    setOpenResturant((prev) => !prev);
  };

  const { selectValue, catId, updateSearchVal } = useSelector(
    (state) => state?.menu
  );

  const handleMinimumOrderChange = (eValue) => {
    setShowModalMinimum(false);
    setMinimumOrderValue(eValue);
    setCheckMinimumOrderValue(true);
  };

  const clearFilter = () => {
    console.log("first clear filter");
    setFilterRating({
      current: true,
      title: "Rating 0.0",
      value: "",
    });
    setFreeDelivery(false);
    setOpenResturant(false);
    setValue("All");
    setMinimumOrderValue(100);
  };

  console.log(value, "value in res");

  const getRestaurants = async (city, zip) => {
    await axios
      .get(
        `https://liefermars.de/ajax/resturents_api_ajax.php?city=${city}&zip=${zip}&page=1&sessid=${localStorage.getItem(
          "uuid"
        )}&type=${selectValue}&category=${catId}`
      )
      .then((res) => {
        if (res?.data?.data) {
          setRestaurantLoader(false);
          setRestaurantItems(res.data.data);
          setCatArray(res.data.cat);
        }
      })
      .catch((err) => {
        setRestaurantLoader(false);
      });
  };

  useEffect(() => {
    console.log("hit useEffect");
    setRestaurantLoader(true);
    const city = params.get("city");
    const zip = params.get("zip");
    getRestaurants(city, zip);
  }, [
    window.location.search,
    selectValue,
    catId,
    updateSearchVal,
    minimumOrderValue,
  ]);

  return (
    <>
      {/*
        This Restaurants requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <div className="">
              <HeaderNavbar />

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        {/* --------------- text crousel ---------------  */}
        <div className="bg-gray-100 header sticky-thc  ">
          <HeaderTextSlider
            catArray={catArray}
            res={true}
            value={value}
            setValue={setValue}
          />
        </div>

        {/* --------------- header grid check switch ------------ */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-start lg:justify-start mx-auto lg:max-w-12xl sm:px-6 lg:px-8 mt-5">
          {/* <div className="lg:flex md:flex lg:justify-between "> */}
          {/* ================= open resturant ================  */}
          <p className="bg-[#d9d9d9ad] font-bold rounded-2xl px-4 py-2 flex items-center text-sm">
            <span className="mr-4">{t("openresturant")}</span>
            <OpenResturant
              enabled={openResturant}
              handleChange={handleChangeOpenResturant}
            />
          </p>
          {/* ===================== free delivery =================  */}
          <p className="bg-[#d9d9d9ad] font-bold rounded-2xl px-4 py-2 flex items-center text-sm ml-0 md:ml-4 lg:ml-4 my-2">
            <span className="mr-4">{t("freedelivery")}</span>
            <OpenResturant
              handleChange={handleChangeDelivery}
              enabled={freeDelivery}
            />
          </p>
          {/* </div> */}
          {/* ---------------- rating ------------  */}
          {/* <div className="flex lg:justify-around"> */}
          <p className="ml-0 md:ml-4 lg:ml-4 text-sm my-2">
            <RatiingHeader
              filterRating={filterRating}
              setShowModal={setShowModal}
              setFilterRating={setFilterRating}
            />
          </p>
          {/* -------------- minimum order ---------------  */}
          <p className="ml-0 md:ml-4 lg:ml-4  my-2">
            <button
              onClick={() => {
                setShowModalMinimum(true);
              }}
              className="bg-[#d9d9d9ad] font-bold rounded-2xl px-4 py-2 text-sm"
            >
              {t("minimumorder")}
            </button>
          </p>
          <p className="ml-0 md:ml-4 lg:ml-4 ">
            <button
              onClick={() => {
                clearFilter();
              }}
              className="bg-[#d9d9d9ad] font-bold rounded-2xl px-4 py-2 text-sm"
            >
              {t("clearfilter")}
            </button>
          </p>
          {/* </div> */}
        </div>

        {/* ----------------------------------- Grid card -----------------------  */}
        <div className="py-0">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
          </header>
          {/* ----------------- menu categray -----------------  */}

          <main>
            <div className="mx-auto lg:max-w-12xl sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-1 sm:px-0 -z-10">
                <RestaurantsGrid
                  loader={restaurantLoader}
                  items={restaurantItems}
                  filterRating={filterRating}
                  freeDelivery={freeDelivery}
                  openResturant={openResturant}
                  minimumOrderValue={minimumOrderValue}
                  checkMinimumOrderValue={checkMinimumOrderValue}
                />
              </div>
              {/* <ModalRating
                onClose={() => setShowModal(false)}
                visible={showModal}
              /> */}
              <Modalminimumorder
                minorder={minimumOrderValue}
                setMinorder={setMinimumOrderValue}
                onClose={() => setShowModalMinimum(false)}
                visible={showModalMinimum}
                setMinimumOrderValue={handleMinimumOrderChange}
                // minimumOrderValue={minimumOrderValue}
              />

              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
      <Footer />

    </>
  );
}
