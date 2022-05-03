import {
  LOG_IN_FETCHING,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  REVALIDATE_TOKEN_FETCHING,
  REVALIDATE_TOKEN_FINISHED,
  LOG_OUT,
  REGISTER_FETCHING,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
} from '../types/authTypes';

const initialState = {
  isLoading: false,
  authenticated: false,
  _id: null,
  email: null,
  isAdmin: null,
  error: false,
  userExists: false,
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
        userExists: false,
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
        userExists: false,
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
        userExists: false,
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
        userExists: false,
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
        userExists: false,
      };
    case REGISTER_FETCHING:
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        _id: null,
        email: null,
        error: false,
        userExists: false,
      };
    case REGISTER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        _id: action.payload._id,
        email: action.payload.email,
        error: false,
        userExists: false,
      };
    case REGISTER_REJECTED:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        _id: null,
        email: null,
        error: false,
        userExists: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        _id: null,
        username: null,
        error: false,
        userExists: false,
      };

    default:
      return state;
  }
};

export default authReducer;
