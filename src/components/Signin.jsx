import HeaderToggle2 from "./Header-Toggle2";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Utility from "../config/Utility";
import uuid from "react-uuid";
import { signInWithGoogle, signInWithFacebook } from "../firebaseConfig";
import {
  googleAuthAction,
  facebookAuthAction,
} from "../redux/store/actions/socialAction";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
    sessid: uuid(),
  });

  const handleChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    Utility.login(state, navigate, dispatch);
    // dispatch(loginUser(state, navigate, dispatch, openSnackbar));
  };

  const googleSign = () => {
    let googleAuthSuccess = (data) => {
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
        dispatch(googleAuthAction(payload, success));
      }
    };
    const googleAuthFail = () => {};
    signInWithGoogle(googleAuthSuccess, googleAuthFail);
  };

  const facebookSignIn = () => {
    let facebookAuthSuccess = (data) => {
      let payload = {
        loginwithsocial: "loginwithsocial",
        provider_id: data?._tokenResponse.localId,
        first_name: data?._tokenResponse.firstName,
        last_name: data?._tokenResponse.lastName,
        email: data._tokenResponse.email,
        provider_name: "Facebook",
        photourl: data?._tokenResponse.photoUrl,
        sessid: uuid(),
      };
      if (payload) {
        let success = (response) => {
          console.log(response, "response from our backend");
        };
        dispatch(facebookAuthAction(payload, success));
      }
    };
    const facebookAuthFail = (error) => {
      console.log(error, "error in facebook auth success");
    };
    signInWithFacebook(facebookAuthSuccess, facebookAuthFail);
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
          <p className="mt-2 text-center text-sm text-gray-600">
            <HeaderToggle2 value1={"Sign in"} value2="Sign Up" />
          </p>
          <div
            className="flex bg-blue-500 mt-4 text-white justify-center p-2 rounded-2xl items-center border-2 cursor-pointer"
            onClick={googleSign}
            style={{
              background: "#0047FF",
              borderRadius: "50px",
            }}
          >
            <p>
              <img src="./images/goo 1.png" height={25} width={25} />
            </p>
            <p className="ml-3 fontfamily">Continue With Google</p>
          </div>
          <div
            style={{ background: "#001E6DF7", borderRadius: "50px" }}
            className="flex mt-4 mb-4 text-white justify-center p-2 rounded-2xl items-center border-2 cursor-pointer"
            onClick={facebookSignIn}
          >
            <p>
              <img src="./images/fb.png" height={25} width={25} />
            </p>
            <p className="ml-3 fontfamily">Continue With Facebook</p>
          </div>
          {/* <div
            style={{
              borderRadius: "50px",
            }}
            className="flex bg-black text-white justify-center p-2 rounded-2xl items-center border-2"
          >
            <p>
              <img src="./images/apple.png" height={25} width={25} />
            </p>
            <p className="ml-3 fontfamily">Continue With Apple</p>
          </div> */}

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-black-500 fontfamily">
                or continue with email
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div
            className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 "
            style={{
              outline: "none",
              border: "none",
            }}
          >
            <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm  font-medium text-black-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={state.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={state.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <label
                  htmlFor="forgetpassword"
                  className="block text-sm font-medium text-black-700 text-end cursor-pointer"
                  onClick={() => {
                    navigate("/forgotpassword");
                  }}
                >
                  Forget Password
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2  "
                  style={{
                    fontFamily: "Inter",
                    borderRadius: "50px",
                  }}
                >
                  Continue to Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
