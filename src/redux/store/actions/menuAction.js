import { toast } from "react-toastify";

import { login, register } from "../../services/authServices/authServices";
import {
  addToCart,
  changePassword,
  checkoutDelivery,
  getAddonsMenu,
  getCartItemList,
  getDeleiveryTime,
  getLoadMoreMenu,
  removeCartMenuList,
  resetPassword,
  updateCartMenuList,
} from "../../services/menuServices/menuServices";
import {
  ADD_TO_CART_MENU_ITEM,
  ADD_TO_CART_MENU_ITEM_FAIL,
  ADD_TO_CART_MENU_ITEM_SUCCESS,
  CHECK_OUT_ITEM,
  CHECK_OUT_ITEM_FAIL,
  CHECK_OUT_ITEM_SUCCESS,
  CHECK_OUT_PAYLOAD_DATA,
  DELETE_ADD_TO_CART_MENU_ITEM,
  DELETE_ADD_TO_CART_MENU_ITEM_FAIL,
  DELETE_ADD_TO_CART_MENU_ITEM_SUCCESS,
  GET_ADD_TO_CART_MENU_ITEM,
  GET_ADD_TO_CART_MENU_ITEM_SUCCESS,
  GET_DELIVERY_TIME,
  GET_DELIVERY_TIME_SUCCESS,
  GET_LOAD_MENU_LIST_ITEM,
  GET_LOAD_MENU_LIST_ITEM_SUCCESS,
  GET_MENU_LIST_ITEM,
  GET_MENU_LIST_ITEM_FAIL,
  GET_MENU_LIST_ITEM_SUCCESS,
  SET_CARTLIST,
  SET_CAT_VALUE,
  SET_ITEM_AMOUNT,
  SET_MAX_REST_VALUE,
  SET_MENU_ID,
  SET_PAYMENT,
  SET_PAYMENT_SUCCESS,
  SET_REST_DEVLIVERY_VALUE,
  SET_REST_PICKUP_VALUE,
  SET_SELECT_VALUE,
  UPDATE_ADD_TO_CART_MENU_ITEM,
  UPDATE_ADD_TO_CART_MENU_ITEM_FAIL,
  UPDATE_ADD_TO_CART_MENU_ITEM_SUCCESS,
  UPDATE_SEARCH_VALUE,
} from "../types/actionTypes";

export const getMenuList = (state, navigate) => async (dispatch) => {
  dispatch({ type: GET_MENU_LIST_ITEM });
  try {
    const response = await getAddonsMenu(state);
    console.log("ADDON RESPONSE ===========>", response);

    // if (response.type == "success") {
    dispatch({
      type: GET_MENU_LIST_ITEM_SUCCESS,
      payload: response,
    });
    // toast.success(response?.msg);
    // navigate('/signin')

    // }
    // else{
    //   dispatch({
    //     type: GET_MENU_LIST_ITEM_FAIL,
    //     payload: 'Failed to fetch data',
    //   });
    //   console.log("hh", response)
    //   toast.error(response?.errorarr);getLoadMoreMenu
    // }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const getLoadMoreMenuList = (id, option) => async (dispatch) => {
  dispatch({ type: GET_LOAD_MENU_LIST_ITEM });
  try {
    const response = await getLoadMoreMenu(id, option);
    console.log("response", response);

    // if (response.type == "success") {
    dispatch({
      type: GET_LOAD_MENU_LIST_ITEM_SUCCESS,
      payload: response,
    });
    // toast.success(response?.msg);
    // navigate('/signin')

    // }
    // else{
    //   dispatch({
    //     type: GET_MENU_LIST_ITEM_FAIL,
    //     payload: 'Failed to fetch data',
    //   });
    //   console.log("hh", response)
    //   toast.error(response?.errorarr);
    // }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const setPaymentValue = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_PAYMENT,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setMenuId = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_MENU_ID,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setCartList = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CARTLIST,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setItemValue = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ITEM_AMOUNT,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setSelectValue = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SELECT_VALUE,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setCatValue = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CAT_VALUE,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setMaxRestVal = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_MAX_REST_VALUE,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setRestDeliveryVal = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_REST_DEVLIVERY_VALUE,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const setRestPickupVal = (value) => async (dispatch) => {
  try {
    dispatch({
      type: SET_REST_PICKUP_VALUE,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const updateSearchValue = (value) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_SEARCH_VALUE,
      payload: value,
    });
  } catch (e) {
    console.log(e);
    // toast.error(e);
  }
};

export const addToCartMenu = (state, navigate) => async (dispatch) => {
  console.log("addToCartMenu ACTION", state);

  dispatch({ type: ADD_TO_CART_MENU_ITEM });
  try {
    const response = await addToCart(state);
    console.log("response", response);

    // if (response.type == "success") {
    if (response?.type == "success") {
      dispatch({
        type: ADD_TO_CART_MENU_ITEM_SUCCESS,
        payload: response,
      });
      return 200;
    } else {
      dispatch({
        type: ADD_TO_CART_MENU_ITEM_FAIL,
        payload: response,
      });
      return 400;
    }
    // toast.success(response?.msg);
    // navigate('/signin')

    // }
    // else{
    //   dispatch({
    //     type: GET_MENU_LIST_ITEM_FAIL,
    //     payload: 'Failed to fetch data',
    //   });
    //   console.log("hh", response)
    //   toast.error(response?.errorarr);
    // }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const getCartMenuListItem = (state, navigate) => async (dispatch) => {
  dispatch({ type: GET_ADD_TO_CART_MENU_ITEM });
  try {
    const response = await getCartItemList(state, navigate);
    // console.log("getCartMenuListItem reducer", response);

    // if (response.type == "success") {
    dispatch({
      type: GET_ADD_TO_CART_MENU_ITEM_SUCCESS,
      payload: response,
    });
    // toast.success(response?.msg);
    // navigate('/signin')

    // }
    // else{
    //   dispatch({
    //     type: GET_MENU_LIST_ITEM_FAIL,
    //     payload: 'Failed to fetch data',
    //   });
    //   console.log("hh", response)
    //   toast.error(response?.errorarr);
    // }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const deleteAddToCartMenu = (state, navigate) => async (dispatch) => {
  dispatch({ type: DELETE_ADD_TO_CART_MENU_ITEM });
  try {
    const response = await removeCartMenuList(state);
    console.log("response", response);

    // if (response.type == "success") {

    if (response?.type == "success") {
      dispatch({
        type: DELETE_ADD_TO_CART_MENU_ITEM_SUCCESS,
        payload: response,
      });
      return 200;
    } else {
      dispatch({
        type: DELETE_ADD_TO_CART_MENU_ITEM_FAIL,
        payload: "failed to update",
      });
      return 400;
    }
    // return 200;
    // toast.success(response?.msg);
    // navigate('/signin')

    // }
    // else{
    //   dispatch({
    //     type: GET_MENU_LIST_ITEM_FAIL,
    //     payload: 'Failed to fetch data',
    //   });
    //   console.log("hh", response)
    //   toast.error(response?.errorarr);
    // }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const UpdateAddToCartMenu = (state, navigate) => async (dispatch) => {
  dispatch({ type: UPDATE_ADD_TO_CART_MENU_ITEM });
  try {
    const response = await updateCartMenuList(state);
    console.log("response", response);

    if (response?.type == "success") {
      dispatch({
        type: UPDATE_ADD_TO_CART_MENU_ITEM_SUCCESS,
        payload: response,
      });
      return 200;
    } else {
      dispatch({
        type: UPDATE_ADD_TO_CART_MENU_ITEM_FAIL,
        payload: "failed to update",
      });
      return 400;
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const CheckoutOrder = (state) => async (dispatch) => {
  console.log("CheckoutOrder called", state);
  dispatch({ type: CHECK_OUT_ITEM });
  try {
    const response = await checkoutDelivery(state);

    console.log("CheckoutOrder response ===", response);

    if (response?.type == "success") {
      dispatch({
        type: CHECK_OUT_ITEM_SUCCESS,
        payload: response,
      });
      // navigate("/invoice");
    } else {
      dispatch({
        type: CHECK_OUT_ITEM_FAIL,
        payload: "Failed to fetch data",
      });
      console.log("hh", response);
      toast.error(response?.msg);
    }
  } catch (e) {
    console.log("e", e);
    toast.error(e.data?.msg);
  }
};

export const saveCheckoutApiPayload = (state, navigate) => async (dispatch) => {
  console.log("saveCheckoutApiPayload called and received this data", state);
  if (state) {
    dispatch({
      type: CHECK_OUT_PAYLOAD_DATA,
      payload: state,
    });
  }
};

export const getDeliveryTimeList = (state, navigate) => async (dispatch) => {
  dispatch({ type: GET_DELIVERY_TIME });
  try {
    const response = await getDeleiveryTime(state);
    // console.log("response", response);

    // if (response.type == "success") {
    dispatch({
      type: GET_DELIVERY_TIME_SUCCESS,
      payload: response,
    });
    // toast.success(response?.msg);
    // navigate('/signin')

    // }
    // else{
    //   dispatch({
    //     type: GET_MENU_LIST_ITEM_FAIL,
    //     payload: 'Failed to fetch data',
    //   });
    //   console.log("hh", response)
    //   toast.error(response?.errorarr);
    // }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
};

export const changePasswordAction = (state, success) => async (dispatch) => {
  try {
    const response = await changePassword(state);
    if (response?.type == "success") {
      toast.success(response?.msg);
      success && success();
    }
    console.log(response?.type);
    if (response?.type == "error") {
      toast.success(response?.msg);
    }
  } catch (e) {
    console.log(e);
    toast.error(e?.data?.msg);
  }
};

export const resetPasswordAction = (state, success) => async (dispatch) => {
  try {
    const response = await resetPassword(state);

    if (response?.type == "success") {
      toast.success(response?.msg, {
        autoClose: 500,
        onClose: () => (window.location = "/signin"),
      });
      success && success();
    }

    if (response?.type == "error") {
      toast.success(response?.msg);
    }
  } catch (e) {
    toast.error(e?.data?.msg);
  }
};
