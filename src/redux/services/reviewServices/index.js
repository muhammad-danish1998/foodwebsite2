import axios from "axios";
import { axiosUrl, contentType } from "../../../apiUrl";

export const addReview = (state) => {
  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(`/ajax/_api_ajax_submit_rating.php`);

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

export const getReviews = (page, sessid) => {
  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(
      `/_api_ajax_my_reviews.php?page=${page}&sessid=${sessid}`
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

export const getRestaurantReviews = (sessid) => {
  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(
      `/_api_ajax_menu.php?resturent_slug=amadeus-pizza&resturent_code=4798445`
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

export const getSubmitReviewData = (sessid) => {
  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(
      `/ajax/__other_apis.php?action=getmysubmitrating&sessid=${sessid}`
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
