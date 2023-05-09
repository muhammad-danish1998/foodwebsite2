import { toast } from "react-toastify";

import { getProfileData, updateProfileData } from "../../services/profile";
import { getSessionData } from "../../services/session";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_SUCCESS,
  SET_USER_SESSION,
  UPDATE_USER_PROFILE,
} from "../types/actionTypes";

export const profileUser = () => async (dispatch) => {
  dispatch({
    type: GET_USER_PROFILE,
  });
  try {
    const response = await getProfileData();
    // console.log("response", response);

    if (response) {
      dispatch({
        type: GET_USER_PROFILE_SUCCESS,
        payload: response,
      });
      toast.success(response?.msg);
    } else {
      dispatch({
        type: GET_USER_PROFILE_FAIL,
        payload: "Failed to fetch data",
      });
      toast.error(response?.errorarr);
    }
  } catch (error) {
    if (error.data.msg === "Please login to access this page.") {
      window.location = "/";
    }
  }
};

export const updateUserProfile = (state) => async (dispatch) => {
  dispatch({
    type: UPDATE_USER_PROFILE,
  });
  try {
    const response = await updateProfileData(state);
    if (response) {
      toast.success(response?.msg);
      dispatch(profileUser());
    } else {
      dispatch({
        type: GET_USER_PROFILE_FAIL,
        payload: "Failed to fetch data",
      });
      toast.error(response?.errorarr);
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const setUserSession = (sessid) => async (dispatch) => {
  try {
    const response = await getSessionData(sessid);
    if (response) {
      toast.success(response?.msg);
      console.log(response, "session response");
      localStorage.setItem("user_id", response?.user_id);
      dispatch({
        type: SET_USER_SESSION,
        payload: response,
      });
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};
