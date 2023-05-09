import { useState } from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import Utility from "../config/Utility";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
  });

  const handleChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const onSubmit = (e) => {
    let success = () => {
      setState((prev) => ({
        ...prev,
        email: "",
      }));
    };
    e.preventDefault();
    // setLoading(true);
    Utility.forgetPassword(state, navigate, dispatch, success);
    // dispatch(loginUser(state, navigate, dispatch, openSnackbar));
  };

  return (
    <div>
      <HeaderNavbar />
      <div className=" bg-white flex-col m-8 h-96 justify-center max-w-8xl   sm:px-6 lg:px-1 fontfamily">
        <h1 className="text-4xl font-bold fontfamily">Forget Password</h1>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black-700"
            style={{
              fontWeight: "700",
            }}
          >
            Email-Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={state.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="block w-full bg-gray-200 rounded-md border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="lg:w-3/4 mt-8 w-full">
            <button
              onClick={onSubmit}
              className="inline-flex items-center px-8  border border-transparent   py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              style={{
                background: "rgba(255, 0, 0, 1)",
                fontWeight: "700",
              }}
            >
              Forget Password
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
