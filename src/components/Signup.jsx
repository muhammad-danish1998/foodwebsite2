import HeaderToggle2 from "./Header-Toggle2";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Utility from "../config/Utility";
import uuid from "react-uuid";
import { signInWithGoogle } from "../firebaseConfig";
import { googleAuthAction } from "../redux/store/actions/socialAction";
/*
  This Signin requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/htmlForms'),
    ],
  }
  ```
*/
export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    your_name: "",
    last_name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const handleChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    Utility.register(state, navigate, dispatch);
    // dispatch(loginUser(state, navigate, dispatch, openSnackbar));
  };

  const googleSign = () => {
    let googleAuthSuccess = (data) => {
      console.log(data, "data in google auth successs");
      let payload = {
        loginwithsocial: "loginwithsocial",
        provider_id: data?.user?.uid,
        first_name: data?.user?.displayName.split(" ")[0],
        last_name: data?.user?.displayName.split(" ")[1],
        email:
          data?.user?.providerData[0]?.email ||
          data?.user?.email ||
          data?.user?.reloadUserInfo?.email,
        // accessToken: data?.user?.accessToken,
        provider_name: "Google",
        photourl: data?.user?.photoURL,
        sessid: uuid(),
      };
      if (payload) {
        let success = (response) => {
          console.log(response, "response from our backend");
        };
        let fail = () => {};
        dispatch(googleAuthAction(payload, success, fail));
      }
    };
    const googleAuthFail = () => {};
    signInWithGoogle(googleAuthSuccess, googleAuthFail);
  };

  return (
    <>
      <div className="relative">
        <div className="absolute left-8 top-5">
          <Link
            to={"/"}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                height: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "5px",
              }}
              className="hidden h-8 w-auto lg:block"
              src="./images/backArrow.svg"
              alt="Your Company"
            />
          </Link>
        </div>
      </div>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <p className="mt-2 text-center text-sm text-black-600">
            <HeaderToggle2 value1={"Sign in"} value2="Sign Up" />
          </p>
        </div>

        <section className="text-black-600 body-font relative">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="container px-5 py-10 mx-auto">
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div
                      className="relative"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-black-600 fontfamily"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="your_name"
                        name="your_name"
                        value={state.your_name}
                        onChange={(e) =>
                          handleChange("your_name", e.target.value)
                        }
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div
                      className="relative"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-black-600 fontfamily"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={state.last_name}
                        onChange={(e) =>
                          handleChange("last_name", e.target.value)
                        }
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div
                      className="relative"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-black-600 fontfamily"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={state.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div
                      className="relative"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-black-600 fontfamily"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={state.password}
                        onChange={(e) =>
                          handleChange("password", e.target.value)
                        }
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div
                      className="relative"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      <label
                        htmlFor="message"
                        className="leading-7 fontfamily text-sm text-black-600"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="repeat_password"
                        name="repeat_password"
                        value={state.repeat_password}
                        onChange={(e) =>
                          handleChange("repeat_password", e.target.value)
                        }
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full ">
                    <div className="relative ">
                      <button
                        style={{
                          fontFamily: "Inter",
                          borderRadius: "50px",
                        }}
                        type="submit"
                        className="w-full  rounded-2xl border   text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-red-700 text-white"
                      >
                        Sign Up
                      </button>
                    </div>

                    <div className="relative mt-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">or </span>
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter",
                        borderRadius: "50px",
                      }}
                      onClick={googleSign}
                      className="flex bg-blue-500 mt-4 text-white justify-center p-2 rounded-2xl items-center border-2 cursor-pointer"
                    >
                      <p>
                        <img src="./images/goo 1.png" height={25} width={25} />
                      </p>
                      <p className="ml-3 fontfamily">Continue With Google</p>
                    </div>
                    <div
                      style={{
                        background: "#001E6D",
                        fontFamily: "Inter",
                        borderRadius: "50px",
                      }}
                      className="flex mt-4 mb-4 text-white justify-center p-2 rounded-2xl items-center border-2"
                    >
                      <p>
                        <img src="./images/fb.png" height={25} width={25} />
                      </p>
                      <p className="ml-3 fontfamily ">Continue With Facebook</p>
                    </div>
                    {/* <div
                      style={{
                        fontFamily: "Inter",
                        borderRadius: "50px",
                      }}
                      className="flex bg-black text-white justify-center p-2 rounded-2xl items-center border-2"
                    >
                      <p>
                        <img src="./images/apple.png" height={25} width={25} />
                      </p>
                      <p className="ml-3 fontfamily">Continue With Apple</p>
                    </div> */}
                    <p
                      className="mt-8  fontfamily
                     text-lg font-semibold text-black"
                    >
                      By tapping ”Sign Up”or”Continue with Google, Facebook, or
                      Apple,”you agree to Liefermars.de{" "}
                      <span className="text-blue-700">
                        {" "}
                        Terms and Conditions{" "}
                      </span>{" "}
                      and Privacy. Police.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
