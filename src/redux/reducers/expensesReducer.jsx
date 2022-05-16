import {
  ADD_EXPENSES_FETCHING,
  ADD_EXPENSES_FULFILLED,
  ADD_EXPENSES_REJECTED,
  UPDATE_EXPENSES_FETCHING,
  UPDATE_EXPENSES_FULFILLED,
  UPDATE_EXPENSES_REJECTED,
  DELETE_EXPENSES_FETCHING,
  DELETE_EXPENSES_FULFILLED,
  DELETE_EXPENSES_REJECTED,
  RESET_EXPENSES_ADDED,
  RESET_EXPENSES_UPDATED,
  RESET_EXPENSES_DELETED,
} from '../types/expensesTypes';

const initialState = {
  isLoading: false,
  expensesList: [],
  error: false,
  isExpAdded: null,
  isExpDeleted: null,
  isExpUpdated: null,
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSES_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_EXPENSES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        expensesList: [...state.expensesList, action.payload],
        isExpAdded: false,
      };
    case ADD_EXPENSES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_EXPENSES_ADDED:
      return {
        ...state,
        isExpAdded: true,
      };
    case UPDATE_EXPENSES_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_EXPENSES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        expensesList: state.expensesList.map((exp) => {
          if (exp._id === action.payload._id) {
            const expUpdated = action.payload;
            return expUpdated;
          }
          return exp;
        }),
        isExpUpdated: false,
      };
    case UPDATE_EXPENSES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_EXPENSES_UPDATED:
      return {
        ...state,
        isExpUpdated: true,
      };
    case DELETE_EXPENSES_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_EXPENSES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        expensesList: [
          ...state.expensesList.filter(
            (expenses) => expenses._id !== action.payload
          ),
        ],
        isExpDeleted: false,
      };
    case DELETE_EXPENSES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_EXPENSES_DELETED:
      return {
        ...state,
        isExpDeleted: true,
      };
    default:
      return state;
  }
};

export default expensesReducer;
