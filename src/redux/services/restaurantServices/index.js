import axios from "axios";
import { axiosUrl, contentType } from "../../../apiUrl";

export const recommendRestaurant = (state) => {
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl(`/_api_ajax_register-restaurant.php`);

    axios
      .post(endpoint, state, contentType)
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};
