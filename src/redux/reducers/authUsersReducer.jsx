import {
  LOG_IN_FETCHING,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  REVALIDATE_TOKEN_FETCHING,
  REVALIDATE_TOKEN_FINISHED,
  /*   REGISTER_FETCHING,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
  LOG_OUT, */
} from '../types/authTypes';

const initialState = {
  isLoading: false,
  authenticated: false,
  _id: null,
  email: null,
  isAdmin: null,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_FETCHING:
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        _id: null,
        email: null,
        isAdmin: false,
        error: false,
      };
    case LOG_IN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
        _id: action.payload._id,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        error: false,
      };
    case LOG_IN_REJECTED:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        _id: null,
        email: null,
        isAdmin: false,
        error: true,
      };
    case REVALIDATE_TOKEN_FETCHING:
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        _id: null,
        email: null,
        isAdmin: false,
        error: true,
      };
    case REVALIDATE_TOKEN_FINISHED:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        _id: null,
        email: null,
        isAdmin: false,
        error: false,
      };
    /*   case SIGN_UP_FETCHING:
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        username: null,
        error: false,
      };
      case SIGN_UP_FULFILLED:
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        username: null,
        error: false,
      };
    case SIGN_UP_REJECTED:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        _id: null,
        username: null,
        error: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        _id: null,
        username: null,
        error: false,
      }; */

    default:
      return state;
  }
};

export default authReducer;
