import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// +++++++++++++++++++++++++++ import for second footer +++++++++++++++

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import RestaurantPopup from "./restaurantModal/RestaurantPopup";

const navigation1 = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/liefermars.de/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100092527781547",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "Twitter",
      href: "https://www.youtube.com/@liefermars2518",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"  />
          </svg>
      ),
    },
  ],
};

export default function Example() {
  const { t, i18n } = useTranslation();
  const [showRecommendResPopup, setShowRecommendResPopup] = useState(false);
  const [showPartnerRestaurantPopup, setShowPartnerRestaurantPopup] =
    useState(false);

  const faqs = [
    {
      question: `${t("gettoknowus")}`,
      answer1: "About Us",
      answer2: "Careers",
      answer3: "Company Blog",
      answer4: "Gift Cards",
      answer5: "Promotions",
      answer6: "Impressum",
    },
    {
      question: "Let Us Help You",
      answer1: "Account Details",
      answer2: "Order History",
      answer3: "Help",
    },
    {
      question: "Doing Business",
      answer1: "Become a Partner Restaurant",
    },
    // {
    //   question: "Terms of Service",
    //   answer1: "Privacy",
    //   answer2: "Delivery Lacations",
    //   answer3: "Help",
    // },
    {
      question: "Terms and Conditions",
      answer1: "Data privacy",
      answer2: "Cookies",
      answer3: "Impressum",
    },
    // More questions...
  ];

  const navigation = {
    solutions: [
      { name: `${t("about")}`, href: "/about" },
      { name: "Linkedln", href: "#" },
      { name: `${t("contact")}`, href: "/contact" },
      { name: `${t("Impressum")}`, href: "#" },

    ],
    support: [
      { name: "Account Details", href: "#" },
      { name: "Order History", href: "#" },
      { name: "Help", href: "#" },
    ],

    legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/liefermars.de/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100092527781547",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },

      {
        name: "Twitter",
        href: "https://www.youtube.com/@liefermars2518",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"  />
          </svg>
        ),
      },
    ],
  };

  return (
    <>
      <footer
        className="p-6 border-2 border-gray-300 hidden lg:block  "
        aria-labelledby="footer-heading"
      >
        <div
          className="mx-auto  max-w-8xl px-6 pb-4 pt-20 sm:pt-6 lg:px-24 "
          style={{ position: "relative" }}
        >
          <div className="xl:grid xl:grid-cols-3 xl:gap-6">
            <div className="grid lg:grid-cols-2 gap-6 xl:col-span-2">
              <div className="fontfamily md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className=" text-lg font-semibold leading-6 text-gray-900">
                    {t("gettoknowus")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-lg leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="fontfamily mt-10 md:mt-0">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Let Us Help You
                  </h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-lg leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
              <div className=" fontfamily md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {t("doingbusiness")}
                  </h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {/* {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-lg leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))} */}
                    <li
                      onClick={() => setShowPartnerRestaurantPopup(true)}
                      className="text-lg leading-6 text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      {t("becomeapartnerrestaurant")}
                    </li>
                    <li
                      onClick={() => setShowRecommendResPopup(true)}
                      className="text-lg leading-6 text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      {t("recommendarestaurant")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="mt-10 xl:mt-0  "
              style={{
                position: "absolute",
                right: "0px",
                top: "-15px",
                background: "",
              }}
            >
              <img src="./images/yeldoz 1.png" />
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-4 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-6">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  target="blank"
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only text-lg">{item.name}</span>
                  <item.icon
                    className="h-6 w-6 mt-3"
                    style={{ color: "rgba(0, 0, 0, 0.36)" }}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
            <p className="mt-8 text-lg  leading-5 text-gray-500 md:order-1 md:mt-0">
              <ul role="list" className="mt-2 space-y-2 fontfamily">
                <li
                  key={"#"}
                  className="lg:flex lg:items-center lg:justify-center"
                >
                  <a
                    href={"#"}
                    className="text-lg  leading-6 text-gray-600 hover:text-gray-900"
                  >
                    <img src="./images/logo.png" width={150} />
                  </a>
                  <Link
                    to={"/terms"}
                    className="text-lg  lg:ml-4 leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {t("termsofservice")}
                  </Link>
                  <Link
                    to={"/dataprivacy"}
                    className="text-lg ml-4 leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {t("privacy")}
                  </Link>
                  {/* <a
                    href={"#"}
                    className="text-lg ml-4 leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {t("deliverylacations")}
                  </a> */}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </footer>

      {/* -------------- mobile footer ---------------  */}
      <footer className=" lg:hidden">
        <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
          <div className="">
            <div className="mx-auto max-w-7xl px-6  lg:px-8">
              <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-0">
                      {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                              <span className="text-base font-semibold leading-7">
                                {faq.question}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                  <MinusSmallIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmallIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer1}
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer2}
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer3}
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer4}
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer5}
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer6}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center space-x-10 md:space-x-24">
            {navigation1.social.map((item) => (
              <a
              target="_blank"
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Your Liefermars , Inc. All rights reserved.
          </p>
        </div>
      </footer>

      <>
        {showRecommendResPopup && (
          <RestaurantPopup
            title={t("recommendarestaurant")}
            handlePopup={setShowRecommendResPopup}
            isAllowPhoneNumber={false}
            profile={1}
          />
        )}

        {showPartnerRestaurantPopup && (
          <RestaurantPopup
            title={t("becomeapartnerrestaurant")}
            handlePopup={setShowPartnerRestaurantPopup}
            isAllowPhoneNumber={true}
            profile={2}
          />
        )}
      </>
    </>
  );
}
