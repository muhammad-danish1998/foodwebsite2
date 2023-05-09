import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { changePasswordAction } from "../redux/store/actions/menuAction";
import { useTranslation } from "react-i18next";

const ChangePassword = () => {
  const { t, i18n } = useTranslation();
  const route = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = localStorage.getItem("uuid");

  const [state, setState] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
    changePassword: 1,
    sessid: access_token,
  });
  const { old_password, new_password, confirm_password, changePassword } =
    state;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = () => {
    dispatch(
      changePasswordAction(state, () => {
        setState({
          old_password: "",
          new_password: "",
          confirm_password: "",
          changePassword: 1,
          sessid: access_token,
        });
      })
    );
  };
  console.log(state, "state");
  return (
    <div>
      <HeaderNavbar />
      <div className=" bg-white flex-col m-8 h-96 justify-center max-w-8xl   sm:px-6 lg:px-1">
        <h1 className="text-4xl font-bold "> {t("changepassword")} </h1>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("oldpassword")}
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="old_password"
              id="old_password"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={old_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("newpassword")}
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={new_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("repeatnewpassword")}
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={confirm_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="lg:w-3/4 mt-8 w-full">
          <button
            onClick={onSubmit}
            className="inline-flex items-center px-8  border border-transparent bg-orange-500  py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {t("save")}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
