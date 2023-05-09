import { REGISTRATION, REGISTER_SUCCESS, REGISTRATION_FAIL, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, GET_USER_PROFILE, GET_DELIVERY_TIME_SUCCESS, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAIL, SET_USER_SESSION,  } from "../types/actionTypes";

const initialState = {
  user: {},
  userProfile:{},
  userProfileUpdate:false,
  users: [],
  loading:null,
  token:null,
  msg:null,
  friendList: {},
  notifications: []
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTRATION:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload?.data,
        token: action.payload?.token,
        msg: action.payload.message,
        loading: false,
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      };
      case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload?.data,
        token: action.payload?.token,
        msg: action.payload.message,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        userProfileUpdate: true
      };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      }; 
    case SET_USER_SESSION:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
