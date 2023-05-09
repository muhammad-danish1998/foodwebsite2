import { toast } from "react-toastify";

import {
  forgetPassword,
  login,
  register,
} from "../../services/authServices/authServices";
import {
  FORGETPASSWORD,
  FORGETPASSWORD_FAIL,
  FORGETPASSWORD_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTRATION,
  REGISTRATION_FAIL,
} from "../types/actionTypes";

export const registerUser = (state, navigate) => async (dispatch) => {
  dispatch({ type: REGISTRATION });
  try {
    const response = await register(state);
    console.log("response", response);

    if (response.type == "success") {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response,
      });
      toast.success(response?.msg);
      navigate("/signin");
    } else {
      dispatch({
        type: REGISTRATION_FAIL,
        payload: "Failed to fetch data",
      });
      toast.error(response?.errorarr);
    }
  } catch (e) {
    console.log("registerUser", e.data.msg);
    toast.error(e.data.msg);
  }
};

export const loginUser = (state, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN });

  try {
    const response = await login(state);

    if (response.type == "success") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });

      toast.success("Login successfully");
      localStorage.setItem("login", "success");
      localStorage.setItem("uuid", state.sessid);
      window.location = "/";
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Failed to fetch data",
      });
      toast.error(response?.errorarr);
    }
  } catch (error) {
    console.log("redux login error", error);
    toast.error(error.data.errorarr);
  }
};

export const forgetPasswordUser =
  (state, navigate, success) => async (dispatch) => {
    dispatch({ type: FORGETPASSWORD });

    try {
      const response = await forgetPassword(state);
      navigate("/signin");
      success();
      if (response.type == "success") {
        console.log(response, "response");
        dispatch({
          type: FORGETPASSWORD_SUCCESS,
          payload: response,
        });
        toast.success("Password reset link sent to your email");
      } else {
        dispatch({
          type: FORGETPASSWORD_FAIL,
          payload: "Failed to fetch data",
        });
        toast.error(response?.errorarr);
      }
    } catch (error) {
      toast.error(error);
    }
  };
