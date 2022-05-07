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
} from '../types/incomeTypes';

const initialState = {
  isLoading: false,
  incomeList: [],
  error: false,
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
      };
    case ADD_INCOME_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
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
        list: state.list.map((inc) => {
          if (inc._id === action.payload._id) {
            const incUpdated = action.payload;
            return incUpdated;
          }
          return inc;
        }),
      };
    case UPDATE_INCOME_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
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
        list: [...state.list.filter((income) => income._id !== action.payload)],
      };
    case DELETE_INCOME_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default incomeReducer;
