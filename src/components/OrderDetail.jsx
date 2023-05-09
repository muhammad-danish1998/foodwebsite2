import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getOrderDetailAction } from "../redux/store/actions/orderAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const OrderDetail = () => {
  const route = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  let orderId = searchParams?.get("orderid");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  let orderDetail = state?.menu?.orderDetail;

  console.log(orderDetail, "redux");
  console.log(state?.menu, "redux");

  console.log(route, "route");
  const access_token = localStorage.getItem("uuid");
  useEffect(() => {
    dispatch(getOrderDetailAction(access_token, orderId));
  }, []);
  const people = [
    {
      name: "Amadeus Pizza",
      email: "leslie.alexander@example.com",
      role: "Adress: Brandenburger Str. 11, 67065 Ludwigshafen",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];

  console.log(state?.user?.userProfile?.profile_img, "user ");
  let profile_img = state?.user?.userProfile?.profile_img;
  return (
    <div>
      <HeaderNavbar />
      <div className=" bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
        <h1 className="text-4xl font-bold">Order Details</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
          <div
            key={orderDetail?.email}
            className="relative flex items-center space-x-3 rounded-lg   bg-white px-6 py-5  focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <img
                className="h-28 w-28 rounded-full"
                src={profile_img}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-2xl font-medium text-gray-900">
                  {orderDetail?.name}
                </p>
                <p className="truncate text-xl text-black-500">
                  {orderDetail?.address}
                </p>
                <div className="lg:flex">
                  <p>
                    Date:{" "}
                    {moment(orderDetail?.created_at)?.format("Do MMMM YYYY")}
                  </p>
                  {/* <p className="lg:ml-8 font-bold">Order #: {orderId}</p> */}
                </div>
              </a>
            </div>
          </div>

          <hr />
        </div>
        <div className=" bg-white flex-col m-8  justify-center max-w-8xl   sm:px-6 lg:px-1">
          {/* <button className="bg-gray-400 px-8 py-2 capitalize ">
            {orderDetail?.shipping}
          </button> */}
          {/* {orderDetail?.items?.map((order) => (
            <>
              <div className="mt-4 flex justify-between max-w-2xl">
                <p>{order?.name}</p>
                <p>{order?.amount}</p>
                <p>{order?.itemtotal}</p>
              </div>
            </>
          ))} */}
          {Object?.keys(!orderDetail?.items ? "" : orderDetail?.items)?.length >
          0 ? (
            Object?.keys(orderDetail?.items)?.map((keyName, i) => (
              <div className="mt-4 flex justify-between max-w-2xl ">
                <p>{orderDetail?.items[keyName]?.name}</p>
                <p>{orderDetail?.items[keyName]?.itemtotal}</p>
              </div>
            ))
          ) : (
            <div className="mt-5 justify-center flex">No Items yet!</div>
          )}
          {/* <div className="mt-8">
            <p>1 Pizza-Ananas</p>
            <p>2 Pizza-Ananas</p>
            <p>3 Pizza-Ananas</p>
            <p>4 Pizza-Ananas</p>
            <p>5 Pizza-Ananas</p>
            <p>6 Pizza-Ananas</p>
            <p>7 Pizza-Ananas</p>
          </div> */}
          {/* <div className="flex mt-4">
            <p>Note</p>
            <p className="ml-4 bg-gray-400 px-8 py-1"> {orderDetail?.ordernote} </p>
          </div> */}

          <div className="mt-4 font-bold flex justify-between max-w-2xl border-t-2">
            <p>Subtutel</p>
            <p>{orderDetail?.subtotal}</p>
          </div>
          <div className="mt-4 font-bold flex justify-between max-w-2xl">
            <p>Delivery Cost</p>
            <p>{orderDetail?.delivery_fee}</p>
          </div>
          <div className="mt-4 font-bold flex justify-between max-w-2xl">
            <p>Total</p>
            <p>{orderDetail?.order_grand_total}</p>
          </div>
          <div className="flex flex-row justify-between">
            {/* <button className="bg-gray-400 px-8 mt-8 py-1 font-bold">
              Paypal
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderDetail;
