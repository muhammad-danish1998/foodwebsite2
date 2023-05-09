import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PageNot from "./PageNot";
import App from "../App";
import About from "./About";
import Addtocardpage from "./Addtocardpage";
import CarditCard from "./CarditCard";
import Contact from "./Contact";
import Dataprivacy from "./Dataprivacy";
import Delivery from "./Delivery";
import EditmyAddress from "./EditmyAddress";
import ForgetPassword from "./ForgetPassword";
import Impressum from "./Impressum";
import Myreview from "./Myreview";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import Pickup from "./Pickup";
import Profile from "./Profile";
import Restaurants from "./Restaurants";
import ResturantReview from "./ResturantReview";
import Signin from "./Signin";
import Signup from "./Signup";
import SingleResOverview from "./SingleResOverview";
import Term from "./Term";
import { useDispatch, useSelector } from "react-redux";
import {
  profileUser,
  setUserSession,
} from "../redux/store/actions/profileAction";
import ChangePassword from "./ChangePassword";
import Checkout from "./Checkout";
import SubmitReview from "./SubmitReview";
import Invoice from "./Invoice";
import ResetPassword from "./ResetPassword";

const MainRoute = () => {
  const dispatch = useDispatch();
  const auth_user = useSelector((state) => state?.user);
  let access_token = localStorage.getItem("uuid");
  let auth_validation =
    localStorage.getItem("user_id") != "undefined" ? true : false;

  useEffect(() => {
    dispatch(setUserSession(access_token));
    if (auth_validation != "undefined") {
      // dispatch(profileUser());
    }
    if (localStorage.getItem("login") == "success") {
      dispatch(profileUser());
      console.log("MAIN ROUTE", localStorage.getItem("login"));
    }
    // if(localStorage.getItem("uuid") != "undefined"){
    //   dispatch(profileUser());
    // }
  }, []);

  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, element, exact }, index) => (
          <Route path={path} element={element} key={index} exact={exact} />
        ))}
        {auth_validation &&
          privateRoutes.map(({ path, element }, index) => (
            <Route path={path} element={element} key={index} />
          ))}
        <Route path="*" element={<PageNot />} />
      </Routes>
    </>
  );
};

export default MainRoute;

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/terms",
    element: <Term />,
  },
  {
    path: "/dataprivacy",
    element: <Dataprivacy />,
  },
  {
    path: "/forgotpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/restaurant",
    element: <Restaurants />,
  },
  {
    path: "/singlerestaurant",
    element: <SingleResOverview />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
];

export const privateRoutes = [
  {
    path: "/addtocart",
    element: <Addtocardpage />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/pickup",
    element: <Pickup />,
  },
  {
    path: "/editmyaddress",
    element: <EditmyAddress />,
  },
  {
    path: "/editpassword",
    element: <ChangePassword />,
  },
  {
    path: "/submitreview",
    element: <SubmitReview />,
  },
  {
    path: "/myreview",
    element: <Myreview />,
  },
  {
    path: "/orderdetail",
    element: <OrderDetail />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/resturantReview",
    element: <ResturantReview />,
  },
  {
    path: "/Impressum",
    element: <Impressum />,
  },
  {
    path: "/CarditCard",
    element: <CarditCard />,
  },
];
