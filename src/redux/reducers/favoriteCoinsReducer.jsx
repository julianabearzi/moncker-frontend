import {
  GET_FAVORITE_COINS_FETCHING,
  GET_FAVORITE_COINS_FULFILLED,
  GET_FAVORITE_COINS_REJECTED,
  UPDATE_FAVORITE_COINS_FETCHING,
  UPDATE_FAVORITE_COINS_FULFILLED,
  UPDATE_FAVORITE_COINS_REJECTED,
  RESET_FAVORITES_UPDATED,
} from '../types/favoritesTypes';

const initialState = {
  isLoading: false,
  list: [],
  error: false,
  isIncUpdated: null,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_COINS_FETCHING:
      return {
        ...state,
        isLoading: true,
        list: [],
        error: false,
        isIncUpdated: null,
      };
    case GET_FAVORITE_COINS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
        error: false,
        isIncUpdated: null,
      };
    case GET_FAVORITE_COINS_REJECTED:
      return {
        ...state,
        isLoading: false,
        list: [],
        error: false,
        isIncUpdated: null,
      };
    case UPDATE_FAVORITE_COINS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_FAVORITE_COINS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list.favorites, action.payload],
        isIncUpdated: false,
      };
    case UPDATE_FAVORITE_COINS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_FAVORITES_UPDATED:
      return {
        ...state,
        isFavUpdated: true,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
