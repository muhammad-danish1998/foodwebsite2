import { toast } from "react-toastify";
import { getOrderDetail, getOrders } from "../../services/order";
import {
  addReview,
  getRestaurantReviews,
  getReviews,
  getSubmitReviewData,
} from "../../services/reviewServices";
import {
  GET_MY_REVIEWS,
  GET_ORDERS,
  GET_ORDER_DETAIL,
  GET_RESTAURANT_REVIEWS,
  GET_REVIEW_DATA,
} from "../types/actionTypes";

export const addReviewAction = (state, success) => async (dispatch) => {
  try {
    const response = await addReview(state);
    if (response?.type == "success") {
      console.log(response, "add review response");
      toast.success(response?.msg);
      success && success();
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const getReviewsAction = (page, sessid) => async (dispatch) => {
  console.log(page, sessid, "getReviewsAction");
  try {
    const response = await getReviews(page, sessid);
    if (response) {
      toast.success(response?.msg);
      dispatch({
        type: GET_MY_REVIEWS,
        payload: response,
      });
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const getRestaurantReviewsAction = (sessid) => async (dispatch) => {
  try {
    const response = await getRestaurantReviews(sessid);
    if (response) {
      toast.success(response?.msg);
      dispatch({
        type: GET_RESTAURANT_REVIEWS,
        payload: response,
      });
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const getSubmitReviewDataAction = (sessid) => async (dispatch) => {
  try {
    const response = await getSubmitReviewData(sessid);
    if (response) {
      toast.success(response?.msg);
      dispatch({
        type: GET_REVIEW_DATA,
        payload: response,
      });
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};
