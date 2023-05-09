import axios from "axios";
import { contentType, axiosUrl } from "../../../apiUrl";

import uuid from "react-uuid";

if (localStorage.getItem("uuid")) {
} else {
  localStorage.setItem("uuid", uuid());
  localStorage.setItem("your_zip", "");
  localStorage.setItem("your_street_name", "Please select your location");
}

export const getProfileData = () => {
  const sessid = localStorage.getItem("uuid");
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl(
      `/ajax/_api_ajax_get_profile_data.php?getprofiledata=1&sessid=${sessid}`
    );

    axios
      .get(endpoint, {})
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const updateProfileData = (state) => {
  const sessid = localStorage.getItem("uuid");
  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(`/_api_ajax_profile-updated.php`);

    axios
      .post(endpoint, state, contentType)
      .then((res) => {
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};
