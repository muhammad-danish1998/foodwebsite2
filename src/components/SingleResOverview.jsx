import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderToggle from "./Header-Toggle";
import HeaderTextSlider from "./HeaderTextSlider";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./Footer";
import CartInc from "./CartInc";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CartPopup from "./CartPopup";
import HeaderNavbar from "./HeaderNavbar";
import { getAddonsMenu } from "../redux/services/menuServices/menuServices";
import {
  setCartList,
  getMenuList,
  setPaymentValue,
  setMenuId,
  getCartMenuListItem,
} from "../redux/store/actions/menuAction";
import HeaderNavbarMenu from "./HeaderNavbarMenu";
import Checkoutpopup from "./Checkputpopup";
import RestaurantReviewPopup from "./RestaurantReviewPopup";
import { Button, Tooltip } from "flowbite-react";
import RestaurantInfoPopup from "./RestaurantInfoPopup";
import ProductInfo from "./ProductInfo";
import Preloader from "./Preloader";
import { get } from "react-scroll/modules/mixins/scroller";
import HeaderNoLoc from "./HeaderNoLoc";
import Footer2 from "./Footer2";

// import {
//   getMenuList,
//   setPaymentValue,
// } from "../redux/store/actions/menuAction";

export default function SingleResOverview() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [singleRestaurantLoader, setSingleRestaurantLoader] = useState(true);
  const navigate = useNavigate();
  const [resDetail, setResDetail] = useState({});
  const [menuArray, setMenuArray] = useState([]);
  const [menures, setMenuRes] = useState([]);
  const [menuresdes, setMenuResDes] = useState("");
  const [menuresimg, setMenuResImg] = useState("");
  const [value, setValue] = useState("");
  const [popup, setPopup] = useState(false);
  const [resPopup, setResPopup] = useState(false);
  const [productInfoPopup, setProductInfoPopup] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});
  const [menuresName, setMenuResName] = useState("");
  const [reviews, setReviews] = useState([]);
  const [catArray, setCatArray] = useState([]);
  const [name, setName] = useState();
  const [currentRestaurantImg, setCurrentRestaurantImg] = useState();
  const [showModal, setShowModal] = useState(false);
  const [checkOutModal, setCheckOutModal] = useState(false);

  const {
    menuList,
    totalAmount,
    itemAmount,
    selectValue,
    cartlist,
    cartlistItem,
    max_rest_val,
  } = useSelector((state) => state?.menu);

  // console.log("cartlistItem", cartlistItem);

  // console.log(
  //   "🚀 ~ file: SingleResOverview.jsx:76 ~ SingleResOverview ~ cartlist:",
  //   cartlist
  // );

  //  ============ check out popup state ========

  const handleClose = () => {
    setShowModal(false);
    setCheckOutModal(false);
  };

  const handleClick = (id, price, name, description, image) => {
    setShowModal(true);

    dispatch(getMenuList(id));
    dispatch(setPaymentValue(price));
    dispatch(setMenuId(id));

    let val = cartlist?.filter((e) => {
      return e.description == name;
    });

    // console.log("omggggggggg",image)
    setMenuResImg(image);
    setMenuResDes(description);
    setMenuResName(name);

    if (val.length == 0) {
      dispatch(
        setCartList({
          description: name,
          price: price,
          menuId: id,
          count: 1,
        })
      );
    }
  };

  // ============= checkout modal function ==============
  const checkoutModalFun = () => {
    setCheckOutModal(true);
  };

  // reviews
  const handleReview = () => {
    setPopup(true);
  };
  // };

  const handleProductInfo = (data) => {
    setProductInfoPopup(true);
    setSelectProduct(data);
  };

  const getRestaurantDetails = async (restaurantSlug, restaurantCode) => {
    const uuid = localStorage.getItem("uuid");
    await axios
      .get(
        `https://liefermars.de/_api_ajax_menu.php?resturent_slug=${restaurantSlug}&resturent_code=${restaurantCode}&sessid=${uuid}`
      )
      .then((response) => {
        console.log("SINGLE RESTAURANT DETAILS", response);
        setSingleRestaurantLoader(false);
        setResDetail(response?.data);
        setName(response?.data?.restname);
        setMenuArray(response.data.menuarr);
        setCatArray(response?.data?.catarr);
        console.log("CART ARRAY", response.data.catarr);
        if (response?.data?.reviewarr === "No review found") {
          setReviews(0);
        } else {
          setReviews(response?.data?.reviewarr);
        }
        setCurrentRestaurantImg(response?.data?.restlogo);
        setMenuRes(response.data.menuarr);
      })
      .catch((err) => {
        setSingleRestaurantLoader(false);
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const restaurantSlug = params.get("resturent_slug");
    const restaurantCode = params.get("resturent_code");

    if (restaurantSlug && restaurantCode) {
      getRestaurantDetails(restaurantSlug, restaurantCode);
    }
  }, [window.location.search]);

  useEffect(() => {
    dispatch(getCartMenuListItem(selectValue, localStorage.getItem("uuid")));
  }, []);

  return singleRestaurantLoader ? (
    <Preloader />
  ) : (
    <div className="">
      {/* ------------- navbar here ---------  */}
      {/* <HeaderNavbar /> */}
      <HeaderNoLoc />
      {/* <HeaderNavbarMenu /> */}
      <div className="sticky-thc  ">
        <HeaderTextSlider
          catArray={catArray}
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="lg:py-0 py-1">
        <div className="mx-auto max-w-9xl   sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-0 lg:px-8">
          <main className="lg:col-span-9  xl:col-span-8 tablet-xl:col-span-8   ">
            {/* -------------- card ----------------  */}
            <section className="text-gray-600  mt-6">
              <div className="w-5/6 lg:container lg:px-5  mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="w-full">
                    {menuArray?.length > 0 ? (
                      <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 h-24 object-cover w-full  "
                          // src={currentRestaurantImg}
                          src="https://www.trgplc.com/wp-content/uploads/2022/03/Pubs_our_brand.jpg"
                          style={{ height: "300px", objectFit: "cover" }}
                          alt="blog"
                        />

                        <div className="p-0  lg:p-0">
                          <div className="flex lg:items-center  justify-between border-2">
                            <div className=" justify-center lg:ml-2 items-center">
                              <div className="flex flex-row gap-3">
                                <h1 className="title-font lg:text-2xl text-xl p-1 lg:p-0 font-medium text-gray-900 mb-3">
                                  {name}{" "}
                                </h1>

                                {/* <Tooltip> */}
                                <button
                                  className="mb-5"
                                  onClick={() => {
                                    setResPopup(true);
                                  }}
                                >
                                  <i className="fa-solid fa-circle-info text-xl"></i>
                                </button>
                                {/* </Tooltip> */}
                              </div>
                              {/* -------- review ------------  */}
                              <div className="flex">
                              <span className="text-lg font-bold mr-2 border-2 bg-gray-300 p-1 cursor-pointer">555</span>
                              <span
                                className="flex items-center p-1 lg:p-0 cursor-pointer"
                                onClick={handleReview}
                              >
                                <svg
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4 "
                                  viewBox="0 0 24 24"
                                  style={{ color: "#FF8A00" }}
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4  lg:ml-2"
                                  viewBox="0 0 24 24"
                                  style={{ color: "#FF8A00" }}
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4  lg:ml-2"
                                  viewBox="0 0 24 24"
                                  style={{ color: "#FF8A00" }}
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4  lg:ml-2"
                                  viewBox="0 0 24 24"
                                  style={{ color: "#FF8A00" }}
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4  lg:ml-2"
                                  viewBox="0 0 24 24"
                                  style={{ color: "#FF8A00" }}
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                              </span>
                              </div>
                              <p className="leading-relaxed mb-3">
                                {/* <HeaderToggle
                                value1={"Delivery"}
                                value2="Pickup"
                              /> */}
                              </p>
                            </div>
                            <div>
                              {/* --------------- logo -------------  */}
                              <div className="mt-0 p-2 ">
                                <img
                                  className="inline-block lg:h-24 lg:w-24 h-12 w-12 rounded-full"
                                  src={currentRestaurantImg}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center flex-wrap">
                            {menuArray?.length > 0 ? (
                              menuArray?.map((eachMenuCatergory) => (
                                <>
                                  <div
                                    className={`border-2 border-gray-400 p-4 rounded-lg mt-4 w-full ${
                                      value == eachMenuCatergory.catname
                                        ? "bg-red-600 text-white"
                                        : ""
                                    }`}
                                    id={eachMenuCatergory?.catname}
                                  >
                                    <h1
                                      className={`lg:text-4xl text-xl font-bold ${
                                        value == eachMenuCatergory.catname
                                          ? "bg-red-600 text-white"
                                          : "text-black"
                                      } `}
                                    >
                                      {eachMenuCatergory.catname}
                                    </h1>
                                    <p>{eachMenuCatergory.catedesc}</p>
                                  </div>
                                  {eachMenuCatergory?.menuarr?.map(
                                    (eachMenuItem) => (
                                      <div className="border-2 p-4 lg:mb-6  mt-4 w-full cursor-pointer fontfamily">
                                        <div
                                          onClick={() => {
                                            handleClick(
                                              eachMenuItem.id,
                                              eachMenuItem.price,
                                              eachMenuItem?.name,
                                              eachMenuItem?.description,
                                              eachMenuItem?.image
                                            );
                                          }}
                                        >
                                          <h1 className="lg:text-2xl text-xl">
                                            {eachMenuItem.name}
                                          </h1>
                                        </div>

                                        <p
                                          className="text-green-500 font-semibold mt-2"
                                          onClick={() => {
                                            handleClick(
                                              eachMenuItem.id,
                                              eachMenuItem.price,
                                              eachMenuItem?.name,
                                              eachMenuItem?.description,
                                              eachMenuItem?.image
                                            );
                                          }}
                                        >
                                          {" "}
                                          € {eachMenuItem.price}
                                        </p>

                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: eachMenuItem.description,
                                          }}
                                          onClick={() => {
                                            handleClick(
                                              eachMenuItem.id,
                                              eachMenuItem.price,
                                              eachMenuItem?.name,
                                              eachMenuItem?.description,
                                              eachMenuItem?.image
                                            );
                                          }}
                                          className="mt-2 flex justify-between"
                                        />

                                        <>
                                          <p className="mt-2 flex justify-between">
                                            {!eachMenuItem?.allergies ? (
                                              <div></div>
                                            ) : (
                                              <div className="font-bold">
                                                <div
                                                  className="cursor-pointer"
                                                  onClick={() => {
                                                    handleProductInfo(
                                                      eachMenuItem
                                                    );
                                                  }}
                                                >
                                                  {t("productinfo")}
                                                </div>
                                              </div>
                                            )}
                                            <div className="">
                                              <i
                                                className="fa-solid fa-plus cursor-pointer shadow-sm hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2"
                                                style={{
                                                  background:
                                                    "rgba(217, 217, 217, 0.14)",

                                                  boxShadow:
                                                    "0px 2px 4px 0.3px rgba(0, 0, 0, 0.25)",
                                                  fontSize: "25px",
                                                  borderRadius: "25px",
                                                }}
                                                onClick={() => {
                                                  handleClick(
                                                    eachMenuItem.id,
                                                    eachMenuItem.price,
                                                    eachMenuItem?.name,
                                                    eachMenuItem?.description,
                                                    eachMenuItem?.image
                                                  );
                                                }}
                                              ></i>
                                            </div>

                                            {/* <button
                                        onClick={() => {
                                          handleClick(
                                            eachMenuItem.id,
                                            eachMenuItem.price,
                                            eachMenuItem?.name
                                          );
                                        }}
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-2xl font-bold text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                      >
                                       +
                                      </button> */}
                                          </p>
                                        </>
                                      </div>
                                    )
                                  )}
                                </>
                              ))
                            ) : (
                              <div className="absolute inset-0 flex items-center mt-[5rem] justify-center">
                                <span className="text-lg font-bold text-red-400">
                                  No Record found!
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center mt-[5rem] justify-center">
                        <span className="text-lg font-bold text-red-400">
                          No Record found!
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ------------------  popup card  ------------------ */}

              <CartPopup
                currentRestaurantImg={currentRestaurantImg}
                onClose={handleClose}
                visible={showModal}
                response={menures}
                menuresName={menuresName}
                menuresdes={menuresdes}
                menuresimg={menuresimg}
                setShowModal={setShowModal}
              />
            </section>
          </main>
          {/* mobile it will hidden  */}
          {menuArray?.length > 0 && (
            <aside className=" xl:col-span-4 sm:block hidden  tablet-xl:col-span-4   p-4  lg:mt-0 mt-8  ">
              <div className="sticky top-8 space-y-4  lg:p-4 ">
                <h1 className=" lg:text-2xl text-xl text-center tablet-xl:mt-8  font-bold">
                  {t("shopping")}
                </h1>

                {/* Cart Addon's Section Start */}

                {cartlistItem?.carttotalamount >= max_rest_val && (
                  <button
                    className="checkout flex text-white justify-between font-bold bg-redColor p-4 rounded-2xl w-full"
                    onClick={() => {
                      if (
                        cartlistItem?.totalpurchase >
                        parseInt(cartlistItem?.minimum_order)
                      ) {
                        navigate("/checkout");
                      }
                    }}
                  >
                    <div>{t("checkout")}</div>
                    <div>€{Number(cartlistItem?.totalpurchase).toFixed(2)}</div>
                  </button>
                )}

                <CartInc />

                {cartlistItem && cartlistItem.items?.length > 0 && (
                  <div className="border-t">
                    <div className="bg-[#D9D9D9] flex items-center justify-between border-t p-4 font-bold mt-4">
                      <div>The restaurant set a minimum order amount</div>
                      <div>
                        <span>€&nbsp;</span>
                        <span>
                          {Number(cartlistItem?.minimum_order).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cart Addon's Section Start */}
              </div>
            </aside>
          )}
        </div>

        {/* ----------  fix bottom for mobile ----------- */}
        {cartlistItem?.carttotalamount >= max_rest_val && (
          <div className="checkout  text-white  justify-between font-bold bg-redColor p-0 rounded-2xl">
            <div className="mobile-fixed-nav-top lg:hidden block ">
              <ul className="mobile-fixed-nav">
                <li>
                  <div
                    className="checkout flex text-white  justify-between font-bold bg-redColor p-4 "
                    onClick={() => {
                      checkoutModalFun();
                    }}
                  >
                    <div>Go to Basket</div>
                    <div>
                      €{Number(cartlistItem?.carttotalamount).toFixed(2)}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        {cartlistItem?.carttotalamount < max_rest_val && (
          <div className="checkout  text-white  justify-between font-bold  p-0 rounded-2xl">
            <div className="mobile-fixed-nav-top lg:hidden block ">
              <ul className="mobile-fixed-nav">
                <li>
                  <p className="checkout flex text-white  justify-between font-bold bg-red-400 p-4 ">
                    <p>Go to Basket</p>
                    <p>€{Number(cartlistItem?.carttotalamount).toFixed(2)}</p>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Checkoutpopup
          visible={checkOutModal}
          setCheckOutModal={setCheckOutModal}
          onClose={handleClose}
          response={menures}
          menuresName={menuresName}
          menuresdes={menuresdes}
        />
        <RestaurantReviewPopup
          popupOpen={popup}
          setPopup={setPopup}
          resName={name}
          reviews={reviews}
        />
        <ProductInfo
          open={productInfoPopup}
          setOpen={setProductInfoPopup}
          data={selectProduct}
        />
        <RestaurantInfoPopup
          detail={resDetail}
          open={resPopup}
          setOpen={setResPopup}
        />
      </div>
      <Footer2 />
    </div>
  );
}
