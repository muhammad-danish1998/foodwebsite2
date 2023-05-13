import React, { useState, useEffect } from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAction } from "../redux/store/actions/orderAction";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Pagination from "../common/pagination/Pagination";
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  let myOrders = state?.menu?.orders?.my_orders;
  let pagination = state?.menu?.orders?.pagination;
  console.log(state?.menu?.orders?.my_orders, "redux");
  const access_token = localStorage.getItem("uuid");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page === "Next") {
      setCurrentPage(currentPage + 1);
    } else if (page === "Previous") {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(page);
    }
  };

  // useEffect(() => {
  //   dispatch(getOrderAction(currentPage, access_token));
  // }, []);

  useEffect(() => {
    dispatch(getOrderAction(currentPage, access_token));
    window.scrollTo(0, 0);
  }, [currentPage]);

  const people = [
    {
      name: "Amadeus Pizza",
      email: "Date: 01.01.2023",
      role: "Adress: Brandenburger Str. 11, 67065 Ludwigshafen",
      orderNum: "Order #: 99uz76j",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      email: "Date: 01.01.2023",
      role: "Co-Founder / CEO",
      orderNum: "Order #: 99uz76j",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      email: "Date: 01.01.2023",
      role: "Co-Founder / CEO",
      orderNum: "Order #: 99uz76j",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];
  return (
    <div>
      <HeaderNavbar />

      <div className="bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
        <h1 className="text-4xl font-bold mb-8 fontfamily">{t("myorder")} </h1>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-1">
          {myOrders?.length > 0 ? (
            myOrders?.map((order) => (
              <div className="relative flex items-center space-x-3  border border-gray-300 bg-white px-6 py-5 shadow-sm ">
                <div
                  className="flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    navigate(`/orderdetail?orderid=${order?.orderid}`);
                  }}
                >
                  <img
                    className="h-24 w-24 rounded-full"
                    src={order.resturentlogo}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => {
                    navigate(`/orderdetail?orderid=${order?.orderid}`);
                  }}
                  className="min-w-0 flex-1 cursor-pointer"
                >
                  <div
                    className="focus:outline-none"
                    style={{
                      fontFamily: "Inter",
                    }}
                  >
                    <span className="" aria-hidden="true" />
                    <p
                      className="text-large  text-gray-900 font-bolder "
                      style={{
                        fontWeight: "bolder",
                      }}
                    >
                      {order.resturentname}
                    </p>
                    <p
                      className="truncate text-large text-black-500"
                      style={{
                        fontWeight: "bolder",
                      }}
                    >
                      {t("address")}:{order.address} {order.address_2}
                    </p>
                    <p className="truncate text-large text-black-500">
                      <span
                        className="font-bold"
                        style={{
                          fontWeight: "bolder",
                        }}
                      >
                        Date:
                        {moment(order?.created_at)?.format("Do MMMM YYYY")}
                      </span>
                    </p>
                  </div>
                </div>
                <>
                  {order?.review_hash_key && (
                    <button
                      className="bg-gray-400 px-2 mt-8 py-1 font-bold rounded cursor-pointer"
                      onClick={() => {
                        console.log("hello");
                        navigate(
                          `/submitreview?reviewkey=${order?.review_hash_key}&resid=${order?.resturentid}`
                        );
                      }}
                    >
                      {t("submitreview")}
                    </button>
                  )}
                </>
              </div>
            ))
          ) : (
            <div className="mt-5 justify-center flex">No Orders yet!</div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Pagination pagination={pagination} pageHandler={handlePageChange} />
      </div>
      <Footer />
    </div>
  );
};

export default Order;
