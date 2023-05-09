import { toast } from "react-toastify";
import {
  googleAuthService,
  facebookAuthService,
} from "../../services/socialServices";

export const googleAuthAction = (state, success) => async (dispatch) => {
  try {
    const response = await googleAuthService(state);
    if (response?.type == "success") {
      toast.success("Login successfully");
      localStorage.setItem("login", "success");
      localStorage.setItem("uuid", state.sessid);
      window.location = "/";
      toast.success(response?.msg);
      success && success();
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const facebookAuthAction = (state, success) => async (dispatch) => {
  try {
    const response = await facebookAuthService(state);
    if (response?.type == "success") {
      toast.success("Login successfully");
      localStorage.setItem("login", "success");
      localStorage.setItem("uuid", state.sessid);
      window.location = "/";
      toast.success(response?.msg);
      success && success();
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};
