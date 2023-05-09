import { toast } from "react-toastify";
import { getOrderDetail, getOrders } from "../../services/order";
import { GET_ORDERS, GET_ORDER_DETAIL } from "../types/actionTypes";

export const getOrderAction = (page, sessid) => async (dispatch) => {
  try {
    const response = await getOrders(page, sessid);
    if (response) {
      toast.success(response?.msg);
      dispatch({
        type: GET_ORDERS,
        payload: response,
      });
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const getOrderDetailAction = (sessid, id) => async (dispatch) => {
  try {
    const response = await getOrderDetail(sessid, id);
    if (response) {
      toast.success(response?.msg);
      dispatch({
        type: GET_ORDER_DETAIL,
        payload: response,
      });
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};
