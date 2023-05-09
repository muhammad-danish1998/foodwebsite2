import axios from "axios";
import { axiosUrl, contentType } from "../../../apiUrl";

export const googleAuthService = (state) => {
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl(`/_api_ajax_login_socials.php`);

    axios
      .post(endpoint, state, contentType)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const facebookAuthService = (state) => {
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl(`/_api_ajax_login_socials.php`);

    axios
      .post(endpoint, state, contentType)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};
