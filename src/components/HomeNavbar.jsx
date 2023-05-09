import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { userNavigation } from "./Header";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const navbar = {
  solutions: [
    { name: "about", href: "/about" },
    // { name: "Support", href: "#" },
    // { name: "termsandconditions", href: "/terms" },
    // { name: "Privacy Policy", href: "/dataprivacy" },
    // { name: "Colophon", href: "/cookies" },
  ],
};
export default function HomeNavbar() {
  const { t, i18n } = useTranslation();
  // const dispatch = useDispatch();
  const auth_user = useSelector((state) => state?.user?.userProfile);
  // console.log(auth_user, "auth user");
  // const navigate = useNavigate();

  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    // window.location.reload();
  };

  const logoutFun = async () => {
    const sssId = localStorage.getItem("uuid");
    await axios
      .post(
        `https://api.liefermars.de/ajax/_api_ajax_logout.php?sessid=${sssId}`
      )
      .then((res) => {
        console.log("logout response", res);
        if (res.data.type === "success") {
          localStorage.clear();
          window.location = "/";
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div
                className="hidden lg:ml-4 lg:block "
                style={{
                  position: "absolute",
                  top: "0",
                  right: "-250px",
                }}
              >
                <div className="flex items-center">
                  {localStorage?.getItem("language") == "en" ? (
                    <img
                      className="h-10 w-10 rounded-full border-2 border-white "
                      src="./images/uk-circle.png "
                      onClick={() => changeLanguage("de")}
                    />
                  ) : (
                    <img
                      className="h-11 w-11 rounded-full border-2 border-white  
                      "
                      src="./images/germany.jpeg"
                      onClick={() => changeLanguage("en")}
                    />
                  )}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full border-white border-2 bg-gray-800 text-sm text-white focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {/* <img
                          className="h-10 w-10 rounded-full "
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                        {/* <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                          {auth_user ? (
                            <img src={auth_user?.profile_img} />
                          ) : (
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          )}
                        </span> */}
                        {auth_user?.user_id ? (
                          <div class="relative">
                            <>
                              <img
                                class="w-10 h-10 rounded-full"
                                src={auth_user?.profile_img}
                                alt=""
                              />
                              <span class="top-0 left-7 absolute  w-3.5 h-3.5  rounded-full"></span>
                            </>
                          </div>
                        ) : (
                          <>
                            <img
                              class="w-10 h-10 rounded-full"
                              src={`./images/user.svg`}
                              alt=""
                            />
                            <span class="top-0 left-7 absolute  w-3.5 h-3.5  rounded-full"></span>
                          </>
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="px-2 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="h1 p-2 fontfamily ">
                          Welcome {auth_user?.firstname} {auth_user?.lastname}
                        </div>
                        {!auth_user?.user_id ? (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  style={{ fontFamily: "Inter" }}
                                  to="/signin"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {t("signin")}
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  style={{ fontFamily: "Inter" }}
                                  to="/signup"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 border-b-2"
                                  )}
                                >
                                  {t("signup")}
                                </Link>
                              )}
                            </Menu.Item>
                          </>
                        ) : (
                          <>
                            {userNavigation?.map((obj) => (
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    style={{ fontFamily: "Inter" }}
                                    to={obj.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {t(`${obj?.name}`)}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </>
                        )}

                        <>
                          {navbar.solutions.map((item) => (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={item.href}
                                  style={{ fontFamily: "Inter" }}
                                  className={classNames(
                                    active ? "bg-black-100" : "",
                                    "block px-4 py-2 text-sm text-black-700"
                                  )}
                                >
                                  {t(`${item?.name}`)}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                          <>
                            {auth_user?.user_id && (
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                    )}
                                    onClick={() => logoutFun()}
                                  >
                                    {t(`Logout`)}
                                  </button>
                                )}
                              </Menu.Item>
                            )}
                          </>
                        </>
                        {/* <Menu.Item>
                          {({ active }) => (
                            <button
                              // to="/signup"
                              onClick={() => changeLanguage('de')}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              German
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              // to="/signup"
                              onClick={() => changeLanguage('en')}

                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              English
                            </button>
                          )}
                        </Menu.Item> */}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-white m-1">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                {t("login")}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                {t("register")}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-white "
                  src="./images/uk-circle.png "
                />
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
