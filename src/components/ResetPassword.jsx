import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
import {
  useNavigate,
  useParams,
  useRoutes,
  useSearchParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
  changePasswordAction,
  resetPasswordAction,
} from "../redux/store/actions/menuAction";

const ResetPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token = searchParams.get("token");

  const [resetPasswordPayload, setResetPasswordPayload] = useState({
    password: "",
    password_confirmation: "",
    token: token,
  });

  const { password, password_confirmation } = resetPasswordPayload;

  useEffect(() => {
    if (token) {
      setResetPasswordPayload((prev) => ({
        ...prev,
        token: token,
      }));
    }
    if (!token) {
      window.location = "/";
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPasswordPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    dispatch(
      resetPasswordAction(resetPasswordPayload, () => {
        setState({
          password: "",
          password_confirmation: "",
          token: "",
        });
      })
    );
  };

  return (
    <div>
      <HeaderNavbar />
      <div className=" bg-white flex-col m-8 h-96 justify-center max-w-8xl   sm:px-6 lg:px-1">
        <h1 className="text-4xl font-bold ">Reset Password</h1>

        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Repeat New Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={password_confirmation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="lg:w-3/4 mt-8 w-full">
          <button
            onClick={onSubmit}
            className="inline-flex items-center px-8  border border-transparent bg-orange-500  py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
