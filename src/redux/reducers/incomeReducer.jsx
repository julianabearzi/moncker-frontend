import {
  ADD_INCOME_FETCHING,
  ADD_INCOME_FULFILLED,
  ADD_INCOME_REJECTED,
  UPDATE_INCOME_FETCHING,
  UPDATE_INCOME_FULFILLED,
  UPDATE_INCOME_REJECTED,
  DELETE_INCOME_FETCHING,
  DELETE_INCOME_FULFILLED,
  DELETE_INCOME_REJECTED,
  RESET_INCOME_ADDED,
  RESET_INCOME_DELETED,
  RESET_INCOME_UPDATED,
} from '../types/incomeTypes';

const initialState = {
  isLoading: false,
  incomeList: [],
  error: false,
  isIncAdded: null,
  isIncDeleted: null,
  isIncUpdated: null,
};

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_INCOME_FULFILLED:
      return {
        ...state,
        isLoading: false,
        incomeList: [...state.incomeList, action.payload],
        isIncAdded: false,
      };
    case ADD_INCOME_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_INCOME_ADDED:
      return {
        ...state,
        isIncAdded: true,
      };
    case UPDATE_INCOME_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_INCOME_FULFILLED:
      return {
        ...state,
        isLoading: false,
        incomeList: state.incomeList.map((inc) => {
          if (inc._id === action.payload._id) {
            const incUpdated = action.payload;
            return incUpdated;
          }
          return inc;
        }),
        isIncUpdated: false,
      };
    case UPDATE_INCOME_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_INCOME_UPDATED:
      return {
        ...state,
        isIncUpdated: true,
      };
    case DELETE_INCOME_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_INCOME_FULFILLED:
      return {
        ...state,
        isLoading: false,
        incomeList: [
          ...state.incomeList.filter((income) => income._id !== action.payload),
        ],
        isIncDeleted: false,
      };
    case DELETE_INCOME_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_INCOME_DELETED:
      return {
        ...state,
        isIncDeleted: true,
      };
    default:
      return state;
  }
};

export default incomeReducer;
