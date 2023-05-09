import axios from "axios";
import { axiosUrl } from "../../../apiUrl";

export const getOrders = (page, sessid) => {
  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(
      `/_api_ajax_my-orders.php?page=${page}&sessid=${sessid}`
    );

    axios
      .get(endpoint, {})
      .then((res) => {
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const getOrderDetail = (sessid, id) => {
  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(
      `/_api_ajax_order-details.php?orderid=${id}&sessid=${sessid}`
    );

    axios
      .get(endpoint, {})
      .then((res) => {
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};
