import {
  USER_PROFILE_FETCHING,
  USER_PROFILE_FULFILLED,
  USER_PROFILE_REJECTED,
} from '../types/profileTypes';

const initialState = {
  isLoading: false,
  error: false,
  income: [],
  expenses: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case USER_PROFILE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        error: false,
        income: action.payload.income,
        expenses: action.payload.expenses,
      };
    case USER_PROFILE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default authReducer;
