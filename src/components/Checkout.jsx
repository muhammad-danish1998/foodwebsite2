import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Utility from "../config/Utility";
import CartInc from "./CartInc";
import axios from "axios";
import HeaderNavbar from "./HeaderNavbar";
import PopupDeliver from "./PopupDeliver";
import { getAddonsMenu } from "../redux/services/menuServices/menuServices";
import {
  CheckoutOrder,
  getDeliveryTimeList,
  getMenuList,
  setPaymentValue,
} from "../redux/store/actions/menuAction";
import Popuppickup from "./Popuppickup";
import { useDispatch, useSelector } from "react-redux";
import Paypal from "./Paypal";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Footer from "./Footer";
// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeNew from "./StripeNew";
import HeaderNoLoc from "./HeaderNoLoc";
import Footer2 from "./Footer2";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const loadingDiv = (
  <div className="flex justify-center items-center">
    <svg
      aria-hidden="true"
      role="status"
      className="inline w-7 h-7 mr-3 text-white animate-spin"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#E5E7EB"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export default function Checkout() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let your_city = localStorage.getItem("city");
  let your_zip = localStorage.getItem("zipCode");
  const params = new URLSearchParams(window.location.search);
  const [deliveryOption, setDeliveryOption] = useState("pickup");
  const [showDetail, setShowDetail] = useState(false);
  const [error, setError] = useState(false);
  const [menuArray, setMenuArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [deliveryTimeList, setDeliveryTimeList] = useState([]);
  const [checkoutMethod, setCheckoutMethod] = useState("cod");
  const [clientSecret, setClientSecret] = useState("");
  const [showStripeLoading, setShowStripeLoading] = useState(false);
  const [timeValue, setTimeValue] = useState(null);
  const [showPaypalComponent, setShowPaypalComponent] = useState(false);
  const [showStripeComponent, setShowStripeComponent] = useState(false);
  const [currentRestaurantImg, setCurrentRestaurantImg] = useState();
  const [state, setState] = useState({
    your_street_name: "",
    your_house_number: "",
    your_city: "",
    your_zip: "",
    floor: "",
    company: "",
    your_name: "",
    your_phone: "",
    note: "",
    your_email: "",
    shipping: "delivery",
    delivery_time: "ASAP",
    PaymentType: checkoutMethod,
    sessid: localStorage.getItem("uuid"),
  });
  const {
    menuList,
    totalAmount,
    cartlist,
    itemAmount,
    cartlistItem,
    selectValue,
    deliverList,
  } = useSelector((state) => state?.menu);

  const plans = [
    {
      id: "cod",
      name: `${t("cashondelivery")}`,
      description: "fa fa-hands",
    },
    {
      id: "paypal",
      name: `${t("paywithpaypal")}`,
      description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
    },
    {
      id: "stripe",
      name: `${t("paywithcard")}`,
      description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
    },
  ];

  // console.log("cartlistItem =====>", cartlistItem);

  const handleClose = () => {
    if (selectValue == "delivery") {
      setShowModal(false);
    } else {
      setShowModal1(false);
    }
  };

  const handleChangeSelectValue = (e) => {
    setTimeValue(e);
  };

  // const showpersonalDetail = () => {
  //   setShowDetail(true);
  // };

  const handleClick = (id, price) => {
    if (selectValue == "delivery") {
      setShowModal(true);
    } else {
      setShowModal1(true);
    }

    // dispatch(getMenuList(id));
    // dispatch(setPaymentValue(price));
  };

  const finalTotalWithDelivery =
    Number(cartlistItem?.totalpurchase) + Number(cartlistItem?.delivery_fee);

  let payload = {
    your_street_name: state.your_street_name,
    your_house_number: state.your_house_number,
    your_city: state.your_city,
    your_zip: state.your_zip,
    floor: state.floor,
    company: state.company,
    your_name: state.your_name,
    your_phone: state.your_phone,
    your_email: state.your_email,
    your_address: `House # ${state.your_house_number},${state.your_street_name}, ${state.your_city}`,
    your_address_two: `House # ${state.your_house_number},${state.your_street_name}, ${state.your_city}`,
    note: state.note,
    shipping: selectValue,
    delivery_time: "ASAP",
    PaymentType: state.PaymentType,
    sessid: localStorage.getItem("uuid"),
  };

  const setUserInfoToCookies = () => {
    Cookies.set("userAddressInfo", JSON.stringify(payload));
  };

  const validatePhoneAndEmail = () => {
    if (payload.your_phone) {
      if (payload.your_phone.length < 10) {
        toast.error("Please enter valid phone number!");
        return;
      }
    }
    if (payload.your_email) {
      if (Utility.validateEmail(payload.your_email) == false) {
        toast.error("Please enter valid email!");
        return;
      }
    }
    return true;
  };

  const handlePaypalPayment = () => {
    if (validatePhoneAndEmail()) {
      setUserInfoToCookies();
      setShowStripeComponent(false);
      setShowPaypalComponent(true);
    }
  };

  const handleStripePayment = () => {
    if (validatePhoneAndEmail()) {
      setUserInfoToCookies();
      setShowPaypalComponent(false);
      setShowStripeLoading(true);
      getClientSecret();
      setShowStripeComponent(true);
    }
  };

  const getClientSecret = async () => {
    const body = {
      mode: "payment",
      currency: "eur",
      amount: Number(cartlistItem.carttotalamount) * 100,
      sessid: localStorage.getItem("uuid"),
    };

    await axios
      .post("https://api.liefermars.de/_api_stripe_create.php", body)
      .then((res) => {
        if (res.data.clientSecret) {
          setShowStripeLoading(false);
          setClientSecret(res.data.clientSecret);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  let handleCodPayment = () => {
    if (validatePhoneAndEmail()) {
      setError(false);
      dispatch(CheckoutOrder(payload, navigate));
      navigate("/invoice");
    }
  };

  const checkValidation = () => {
    let validate = false;

    if (selectValue === "pickup") {
      if (!payload.your_name || !payload.your_phone || !payload.your_email) {
        validate = false;
      } else {
        validate = true;
      }
    }

    if (selectValue === "delivery") {
      if (
        !payload.your_street_name ||
        !payload.your_house_number ||
        !payload.your_city ||
        !payload.your_zip ||
        !payload.your_name ||
        !payload.your_phone ||
        !payload.your_email
      ) {
        validate = false;
      } else {
        validate = true;
      }
    }

    return validate;
  };

  useEffect(() => {
    if (deliverList) {
      setDeliveryTimeList(deliverList);
    }
  }, [deliverList]);

  useEffect(() => {
    if (your_city || your_zip) {
      setState((state) => ({
        ...state,
        ["your_zip"]: your_zip,
        ["your_city"]: your_city,
      }));
    }
  }, [your_city, your_zip]);

  useEffect(() => {
    if (checkoutMethod === "paypal") {
      if (!checkValidation()) {
        setError(true);
      }
      if (checkValidation()) {
        setError(false);
      }
    }
    if (checkoutMethod === "stripe") {
      if (!checkValidation()) {
        setError(true);
      }
      if (checkValidation()) {
        setError(false);
      }
    }
    if (checkoutMethod === "cod") {
      if (!checkValidation()) {
        setError(true);
      }
      if (checkValidation()) {
        setError(false);
      }
    }
  }, [checkoutMethod, checkValidation()]);

  useEffect(() => {
    if (Cookies.get("userAddressInfo") !== undefined) {
      let userAddressInfo = JSON.parse(Cookies.get("userAddressInfo"));
      setState((state) => ({
        ...state,
        ["your_street_name"]: userAddressInfo.your_street_name,
        ["your_house_number"]: userAddressInfo.your_house_number,
        ["your_city"]: userAddressInfo.your_city,
        ["your_zip"]: userAddressInfo.your_zip,
        ["floor"]: userAddressInfo.floor,
        ["company"]: userAddressInfo.company,
        ["your_name"]: userAddressInfo.your_name,
        ["your_phone"]: userAddressInfo.your_phone,
        ["your_email"]: userAddressInfo.your_email,
        ["note"]: userAddressInfo.note,
      }));
    }
  }, []);

  useEffect(() => {
    if (cartlistItem?.items?.length == 0) {
      navigate("/");
    }
  }, [cartlistItem]);

  useEffect(() => {
    console.log("selectValue", selectValue);
  }, [selectValue]);

  useEffect(() => {
    dispatch(getDeliveryTimeList(localStorage.getItem("uuid")));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  // console.log("setDeliveryTimeList === >", deliveryTimeList)

  // ============== i commit this for card emty =============
  // useEffect(() => {
  //   const restaurantSlug = params.get("resturent_slug");
  //   const restuarantCode = params.get("resturent_code");
  //   axios
  //     .get(
  //       `https://liefermars.de/_api_ajax_menu.php?resturent_slug=${restaurantSlug}&resturent_code=${restuarantCode}`
  //     )
  //     .then((response) => {
  //       setMenuArray(response.data.menuarr);
  //       setCurrentRestaurantImg(response?.data?.restlogo);
  //     });
  // }, [window.location.search]);

  return (
    <div className="min-h-screen">
      {/* <HeaderNavbar /> */}
      <HeaderNoLoc />

      <div className="py-6">
        <div className="mx-auto max-w-8xl sm:px-6 lg:grid lg:max-w-9xl lg:grid-cols-12 lg:gap-8 lg:px-8">
          <main className="lg:col-span-8 xl:col-span-8">
            {/* -------------- card ----------------  */}
            <section class="text-gray-600 body-font mt-0">
              <div class="lg:container lg:px-5  mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class=" md:w-full">
                    <div class="h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="p-6">
                        <div class="flex items-center flex-wrap ">
                          <div className=" rounded-lg px-1 mb-2 w-5/6">
                            <h1 className="lg:text-4xl text-2xl font-bold text-black mb-2">
                              {t("checkout")}
                            </h1>
                          </div>
                          <div
                            className={`border-2 ${
                              checkValidation()
                                ? "border-gray-400"
                                : "border-red-400"
                            }  rounded-lg p-8 mt-4 mb-4 bg-white lg:w-5/6 w-full`}
                          >
                            <div className="cursor-pointer">
                              <label
                                onClick={() => {
                                  handleClick();
                                }}
                                htmlFor="comment "
                                className="block text-xl cursor-pointer font-medium text-gray-700"
                              >
                                {t("personalinformation")}
                              </label>
                              <PopupDeliver
                                currentRestaurantImg={currentRestaurantImg}
                                onClose={handleClose}
                                visible={true}
                                validation={checkValidation()}
                                state={state}
                                setState={setState}
                              />
                            </div>
                          </div>
                          <div className="border-2 border-gray-400 rounded-lg p-8 mt-4 mb-4 bg-white lg:w-5/6 w-full">
                            <div>
                              <label
                                htmlFor="comment "
                                className="block text-xl cursor-pointer font-medium text-gray-700"
                              >
                                {t("payment")}
                              </label>
                              <div>
                                <div className="mt-1">
                                  <fieldset className="mt-4">
                                    <div className="space-y-5">
                                      {plans.map((plan) => (
                                        <div
                                          key={plan.id}
                                          className="relative flex items-start"
                                        >
                                          <div className="flex h-5 items-center">
                                            <input
                                              id={plan.id}
                                              aria-describedby={`${plan.id}-description`}
                                              name="plan"
                                              type="radio"
                                              value={checkoutMethod}
                                              defaultChecked={
                                                checkoutMethod == plan.id
                                              }
                                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                              onChange={(e) => {
                                                setCheckoutMethod(e.target.id);
                                                if (e.target.id === "stripe") {
                                                  setShowPaypalComponent(false);
                                                } else if (
                                                  e.target.id === "paypal"
                                                ) {
                                                  setShowStripeComponent(false);
                                                } else if (
                                                  e.target.id === "cod"
                                                ) {
                                                  setShowStripeComponent(false);
                                                  setShowPaypalComponent(false);
                                                }
                                              }}
                                            />
                                          </div>
                                          <div className="ml-3 text-sm">
                                            <label
                                              htmlFor={plan.id}
                                              className="font-medium text-gray-700"
                                            >
                                              {plan.name}
                                            </label>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                          </div>
                          <>
                            <div className=" border-gray-400  p-1   mt-4 mb-4 bg-white  lg:w-5/6 w-full">
                              <div className="p-4">
                                <label
                                  htmlFor="comment "
                                  className="block text-xl  font-medium text-gray-700"
                                >
                                  {t("estmdeliverytimesort")}
                                </label>
                                <select
                                  id="location"
                                  name="location"
                                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                  defaultValue="ASAP"
                                  onChange={(e) =>
                                    handleChangeSelectValue(e.target.value)
                                  }
                                >
                                  <option value="ASAP">ASAP</option>
                                  {deliveryTimeList?.map((e) => (
                                    <option value={e.time}>{e.time}</option>
                                  ))}
                                  <></>
                                </select>
                              </div>
                            </div>

                            <div className=" border-gray-400 p-1 mt-4 mb-4 bg-white lg:w-5/6 w-full">
                              <div className="p-4">
                                <label
                                  htmlFor="comment "
                                  className="block text-xl font-medium text-gray-700"
                                >
                                  {t("addnoteoptional")}
                                </label>
                                <div className="mt-1">
                                  <input
                                    name="note"
                                    placeholder="Please don’t ring the bell baby is sleeping."
                                    className="p-4  w-full bg-gray-200"
                                    type={"text "}
                                    value={state.note}
                                    onChange={(e) => {
                                      setState((state) => ({
                                        ...state,
                                        note: e.target.value,
                                      }));
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            {checkoutMethod === "cod" && checkValidation() && (
                              <div className="border-gray-400 p-1 mt-4 mb-4 bg-white lg:w-5/6 w-full px-5">
                                <button
                                  onClick={() => handleCodPayment()}
                                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-4 lg:text-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                  {t("orderandpay")}
                                </button>
                              </div>
                            )}

                            {checkoutMethod === "paypal" &&
                              !showPaypalComponent &&
                              checkValidation() && (
                                <div className="border-gray-400 p-1 mt-4 mb-4 bg-white lg:w-5/6 w-full px-5">
                                  <button
                                    onClick={() => handlePaypalPayment()}
                                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-4 lg:text-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    {t("orderandpay")}
                                  </button>
                                </div>
                              )}

                            {checkoutMethod === "stripe" &&
                              checkValidation() && (
                                <div className=" border-gray-400 p-1 mt-4 mb-4 bg-white lg:w-5/6 w-full px-5">
                                  <button
                                    onClick={() => handleStripePayment()}
                                    disabled={showStripeLoading}
                                    className=" inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-4 lg:text-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    {showStripeLoading
                                      ? loadingDiv
                                      : t("orderandpay")}
                                  </button>
                                </div>
                              )}

                            {checkoutMethod === "cod" && !checkValidation() && (
                              <button className="text-red-500 px-5 mt-4 p-1">
                                Please complete the required field to use Cash
                                on delivery!
                              </button>
                            )}

                            {checkoutMethod === "stripe" &&
                              !checkValidation() && (
                                <button className="text-red-500 px-5 mt-4 p-1">
                                  Please complete the required field to use
                                  Stripe!
                                </button>
                              )}

                            {checkoutMethod === "paypal" &&
                              !checkValidation() && (
                                <button className="text-red-500 px-5 mt-4 p-1">
                                  Please complete the required field to use
                                  Paypal!
                                </button>
                              )}

                            {/* Paypal Payment */}

                            {showPaypalComponent && (
                              <div className="p-1 mt-4 mb-4 lg:w-5/6 text-center">
                                <Paypal
                                  checkoutAPIPayload={payload}
                                  totalAmount={Number(
                                    cartlistItem?.carttotalamount
                                  ).toFixed(2)}
                                />
                              </div>
                            )}

                            {/* Stripe Payment */}

                            {clientSecret &&
                              !showStripeLoading &&
                              showStripeComponent && (
                                <Elements
                                  options={options}
                                  stripe={stripePromise}
                                >
                                  <StripeNew
                                    email={state.your_email}
                                    totalAmount={finalTotalWithDelivery.toFixed(
                                      2
                                    )}
                                    validation={checkValidation}
                                    checkoutAPIPayload={payload}
                                    showStripePopup={showStripeComponent}
                                    setShowStripePopup={setShowStripeComponent}
                                  />
                                </Elements>
                              )}
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Popuppickup
                currentRestaurantImg={currentRestaurantImg}
                onClose={handleClose}
                visible={showModal1}
                setShowModal1={setShowModal1}
              />
              {/* <Popuppickup /> */}
            </section>
          </main>
          <aside className="col-span-4 xl:col-span-4 xl:block border-2 p-4 lg:p-0 max-h-[calc(100vh-7rem)]">
            <div className="sticky top-6 space-y-6 lg:p-4">
              <h1 className="text-2xl font-bold">Basket</h1>
              <div className="checkout flex text-white justify-between bg-red-500 p-4 rounded-2xl">
                <p>{t("checkout")} </p>
                <p>€{Number(cartlistItem?.totalpurchase).toFixed(2)}</p>
              </div>
              <CartInc />
              <div className="flex justify-between font-semibold">
                <p> {t("subtotal")}</p>
                <p>€ {Number(cartlistItem?.totalpurchase).toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>{t("deliverycosts")}</p>
                <p>€ {Number(cartlistItem?.delivery_fee).toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p className="text-2xl font-bold">{t("total")}</p>
                <p className="text-2xl font-bold">
                  <span>€&nbsp;</span>
                  <span>{finalTotalWithDelivery.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
