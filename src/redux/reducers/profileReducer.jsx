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
  createdAt: false,
  isPremium: null,
  _id: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: false,
        createdAt: false,
        isPremium: null,
        id: false
      };
    case USER_PROFILE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        error: false,
        income: action.payload.income,
        expenses: action.payload.expenses,
        createdAt: action.payload.createdAt,
        isPremium: action.payload.isPremium,
        id: action.payload._id
      };
    case USER_PROFILE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        createdAt: false,
        isPremium: false
      };

    default:
      return state;
  }
};

export default authReducer;
