import {
  GET_COINS_FETCHING,
  GET_COINS_FULFILLED,
  GET_COINS_REJECTED,
} from '../types/coinTypes';

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COINS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_COINS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default coinsReducer;
