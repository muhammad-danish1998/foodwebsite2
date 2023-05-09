import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import CartInc from "./CartInc";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartMenu,
  getCartMenuListItem,
  getLoadMoreMenuList,
  setCartList,
  setPaymentValue,
} from "../redux/store/actions/menuAction";
import Preloader from "./Preloader";

let amount;
let valTotalAmount;
let previousAddonPrice = 0;

export default function CartPopup({
  visible,
  onClose,
  currentRestaurantImg,
  response,
  menuresName,
  menuresdes,
  menuresimg,
  setShowModal,
}) {
  if (!visible) return null;

  const {
    menuList0,
    totalAmount,
    loadMenuList,
    loading,
    cartlist,
    selectValue,
    menu_id,
  } = useSelector((state) => state?.menu);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cancelButtonRef = useRef(null);
  const [open, setOpen] = useState(true);

  const [productPrice, setProductPrice] = useState(1);
  const [menuList, setMenuList] = useState(menuList0);
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [loadUpdatedMenuList, setLoadUpdatedMenuList] = useState({});
  const [menuOption, setMenuOption] = useState(null);
  const [singleAddon, setSingleAddon] = useState([]);
  const [multiAddons, setMultiAddons] = useState([]);
  const [addonOption, setAddonOption] = useState("");

  const decrementValue = () => {
    if (productPrice > 1) {
      setProductPrice((productPrice) => productPrice - 1);
    }
    amount = (Number(totalAmount) * productPrice).toFixed(2);
  };

  const incrementValue = () => {
    setProductPrice((productPrice) => productPrice + 1);
    amount = (Number(totalAmount) * productPrice).toFixed(2);
    console.log("amount", amount);
  };

  const handleOnClose = (val) => {
    onClose();
  };

  const handleAddons = (addonData) => {
    const addon = JSON.parse(addonData);

    // console.log(addon);
    const addonId = addon.addon_id;

    const arr = {
      [addonId]: addon,
    };

    // console.log("arr", arr);

    if (singleAddon.length === 0) {
      setSingleAddon([...singleAddon, arr]);
    } else {
      const newSingleAddon = singleAddon.filter(
        (addon) => Object.keys(addon)[0] !== addonId
      );
      setSingleAddon([...newSingleAddon, arr]);
    }

    // console.log(":singleAddon", singleAddon);
  };

  const handleMultiAddon = (checked, addon) => {
    // console.log("checked", checked);
    // console.log("handleMultiAddon", addon);

    if (checked) {
      setMultiAddons([...multiAddons, addon.id]);
      setUpdatedAmount(Number(updatedAmount) + Number(addon.price));
    } else {
      if (multiAddons.includes(addon.id)) {
        const newAddons = multiAddons.filter((id) => id !== addon.id);
        setMultiAddons(newAddons);
      }
      setUpdatedAmount(Number(updatedAmount) - Number(addon.price));
    }
  };

  const handleAddToCart = () => {
    dispatch(setPaymentValue(amount));

    let orderData = {
      hidden_price: totalAmount,
      menu: menu_id,
      quantity: productPrice,
      sessid: localStorage.getItem("uuid"),
      option: menuOption,
    };

    if (multiAddons.length > 0) {
      let multoAddonString = "multiaddons";
      orderData[multoAddonString] = multiAddons;
    }

    // let singleAddonsArr = [];
    if (singleAddon.length > 0) {
      singleAddon.map((addon, index) => {
        // console.log(addon);
        const filteredArr = singleAddon[index];
        const filteredArr2 = Object.values(filteredArr)[0];
        let addonsKey = `addons[${filteredArr2.addon_id}]`;
        orderData[addonsKey] = filteredArr2.id;
      });
    }

    // console.log("CHECKOUT ORDER DATA", orderData);
    // return;

    dispatch(addToCartMenu(orderData)).then((res) => {
      if (res === 200) {
        dispatch(
          getCartMenuListItem(selectValue, localStorage.getItem("uuid"))
        );
        onClose();
        setSingleAddon([]);
      }
    });
  };

  const handleOptions = (e) => {
    const value = JSON.parse(e);
    setAddonOption(e);
    setMenuOption(value.id);
    handleChangeValue(value.menu_id, value.id);
    setUpdatedAmount(Number(value.price));
  };

  const handleChangeValue = (menuId, id) => {
    dispatch(getLoadMoreMenuList(menuId, id));
  };

  useEffect(() => {
    let sum = 0;
    singleAddon.map((addon, index) => {
      const filteredArr = singleAddon[index];
      const filteredArr2 = Object.values(filteredArr)[0];
      sum += Number(filteredArr2.price);
    });
    if (sum >= 0) {
      setUpdatedAmount(Number(totalAmount) + Number(sum));
    }
  }, [singleAddon]);

  useEffect(() => {
    setMenuList(menuList0);
  }, [menuList0]);

  useEffect(() => {
    setLoadUpdatedMenuList({});
  }, [menuList0]);

  useEffect(() => {
    setLoadUpdatedMenuList(loadMenuList);
  }, [loadMenuList]);

  useEffect(() => {
    amount = totalAmount;
    setUpdatedAmount(totalAmount);
    console.log(response);
    valTotalAmount = 0;
  }, []);

  useEffect(() => {
    return setLoadUpdatedMenuList({}), setMenuList({});
  }, []);

  return (
    <Dialog className="relative z-10" onClose={handleOnClose} open={open}>
      <div className="fixed border-2  b inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      (
      <div className="fixed  inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center  p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative border-2 w-full   transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <>
              <div>
                <span className="flex justify-end ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 hover:text-red-600 cursor-pointer "
                    onClick={() => setShowModal(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div className="mt-3  sm:mt-2 overflow-y-auto">
                  <div className="  flex flex-col  ">
                    <p className="w-full  mb-4 ">
                      {menuresimg ? (
                        <img
                          src={menuresimg}
                          className="object-contain h-48   w-full rounded-xl"
                        />
                      ) : (
                        ""
                      )}
                    </p>

                    <Dialog.Title
                      as="h3"
                      className="lg:text-2xl   text-xl font-medium leading-6 text-gray-900"
                    >
                      {menuresName}
                    </Dialog.Title>
                    <Dialog.Title
                      as="h3"
                      className="text-sm  font-normal leading-6 text-gray-900"
                    >
                      {menuresdes}
                    </Dialog.Title>
                    <div className=" h-[12rem]">
                      {loading ? (
                        <div class="w-full">
                          <div class="animate-pulse flex space-x-4">
                            <div class="flex-1 mt-4">
                              <div class="space-y-4">
                                <div class="h-4 bg-slate-200 rounded"></div>
                                <div class="h-4 bg-slate-200 rounded"></div>
                                <div class="h-4 bg-slate-200 rounded"></div>
                                <div class="h-4 bg-slate-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        menuList?.options && (
                          <div className="">
                            <label
                              htmlFor="location"
                              className="block text-sm font-medium text-gray-700"
                            >
                              {menuList?.options?.optionname}
                            </label>

                            <select
                              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              id="location"
                              name="location"
                              value={addonOption}
                              onChange={(e) => handleOptions(e.target.value)}
                            >
                              {menuList.options?.optionarr?.map(
                                (val, index) => {
                                  return (
                                    <option
                                      key={index}
                                      value={JSON.stringify(val)}
                                    >
                                      {val.name + " €" + val.price}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        )
                      )}

                      {Object.values(loadUpdatedMenuList).length < 1 &&
                        menuList?.addons?.map((addVal, index) => (
                          <div key={index} className="mt-4">
                            <label
                              htmlFor="location"
                              className="block text-sm  font-medium text-gray-700"
                            >
                              {addVal.addons.name}
                            </label>

                            {addVal.addons?.type == "single" && (
                              <select
                                id="location"
                                name="location"
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                defaultValue="Canada"
                                onChange={(e) => handleAddons(e.target.value)}
                              >
                                {addVal.addons?.type == "single" &&
                                  addVal.addons?.opt?.map((item, index) => {
                                    return (
                                      <option
                                        key={index}
                                        value={JSON.stringify(item)}
                                      >
                                        {item.title + " €" + item.price}
                                      </option>
                                    );
                                  })}
                              </select>
                            )}

                            <div className="mt-4">
                              {addVal.addons?.type == "multi" &&
                                addVal.addons?.opt?.map((item, index) => (
                                  <p key={index}>
                                    <label class="relative inline-flex items-center cursor-pointer mt-3">
                                      <input
                                        type="checkbox"
                                        value={`${item.id} , ${item.price}`}
                                        class="sr-only peer"
                                        onChange={(e) =>
                                          handleMultiAddon(
                                            e.target.checked,
                                            item
                                          )
                                        }
                                      />
                                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {item.title + " €" + item.price}
                                      </span>
                                    </label>
                                  </p>
                                ))}
                            </div>
                          </div>
                        ))}

                      {Object.values(loadUpdatedMenuList).length >= 1 &&
                        loadUpdatedMenuList?.addons?.map((addVal, index) => (
                          <div key={index}>
                            <label
                              htmlFor="location"
                              className="block text-sm font-medium text-gray-700 mt-4"
                            >
                              {addVal.name}
                            </label>
                            {addVal?.type === "single" && (
                              <select
                                id="location"
                                name="location"
                                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                onChange={(e) => handleAddons(e.target.value)}
                              >
                                {addVal?.type == "single" &&
                                  addVal?.opt?.map((val, index) => (
                                    <option
                                      key={index}
                                      value={`${val.addon_id} , ${val.id}`}
                                    >
                                      {val.title + " €" + val.price}
                                    </option>
                                  ))}
                              </select>
                            )}
                            <p className="mt-4">
                              {addVal?.type === "multi" &&
                                addVal?.opt?.map((item, index) => (
                                  <p>
                                    <label
                                      key={index}
                                      class="relative inline-flex items-center cursor-pointer mt-3"
                                    >
                                      <input
                                        type="checkbox"
                                        // value={val0?.id}
                                        value={`${item.id} , ${item.price}`}
                                        class="sr-only peer"
                                        onChange={(e) =>
                                          handleMultiAddon(
                                            e.target.checked,
                                            item
                                          )
                                        }
                                      />
                                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {item.title + " €" + item.price}
                                      </span>
                                    </label>
                                  </p>
                                ))}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 border-black sm:mt-6 sm:flex lg:justify-between sm:gap-3">
                <div className="card-list-uper">
                  <p className="flex justify-center items-center">
                    <i
                      class="fa-solid fa-minus cursor-pointer border-2 p-2 rounded-full border-black"
                      onClick={() => decrementValue()}
                    ></i>

                    <span className="m-2">{productPrice}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      onClick={() => incrementValue()}
                      className="w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-3 bg-red-500 text-white inline-flex lg:w-2/3 w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 lg:text-lg sm:text-sm"
                  onClick={() => handleAddToCart()}
                  ref={cancelButtonRef}
                  style={{
                    background: "#FF0000",
                    borderRadius: "40px",
                  }}
                >
                  {t("addtocart")} €
                  {(Number(updatedAmount) * Number(productPrice)).toFixed(2)}
                </button>
              </div>
            </>
          </Dialog.Panel>
        </div>
      </div>
      )
    </Dialog>
  );
}
