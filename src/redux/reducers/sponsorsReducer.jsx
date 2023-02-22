import {
  GET_SPONSORS_FETCHING,
  GET_SPONSORS_FULFILLED,
  GET_SPONSORS_REJECTED,
  ADD_SPONSORS_FETCHING,
  ADD_SPONSORS_FULFILLED,
  ADD_SPONSORS_REJECTED,
  UPDATE_SPONSORS_FETCHING,
  UPDATE_SPONSORS_FULFILLED,
  UPDATE_SPONSORS_REJECTED,
  DELETE_SPONSORS_FETCHING,
  DELETE_SPONSORS_FULFILLED,
  DELETE_SPONSORS_REJECTED,
  RESET_SPONSORS_ADDED,
  RESET_SPONSORS_DELETED,
  RESET_SPONSORS_UPDATED,
} from '../types/sponsorsTypes';

const initialState = {
  isLoading: false,
  sponsorsList: [],
  error: false,
  isIncAdded: null,
  isIncDeleted: null,
  isIncUpdated: null,
};

const sponsorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPONSORS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SPONSORS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        sponsorsList: action.payload,
      };
    case GET_SPONSORS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_SPONSORS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_SPONSORS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        sponsorsList: [...state.sponsorsList, action.payload],
        isIncAdded: false,
      };
    case ADD_SPONSORS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_SPONSORS_ADDED:
      return {
        ...state,
        isIncAdded: true,
      };
    case UPDATE_SPONSORS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_SPONSORS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        sponsorsList: state.sponsorsList.map((inc) => {
          if (inc._id === action.payload._id) {
            const incUpdated = action.payload;
            return incUpdated;
          }
          return inc;
        }),
        isIncUpdated: false,
      };
    case UPDATE_SPONSORS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_SPONSORS_UPDATED:
      return {
        ...state,
        isIncUpdated: true,
      };
    case DELETE_SPONSORS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SPONSORS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        sponsorsList: [
          ...state.sponsorsList.filter(
            (sponsors) => sponsors._id !== action.payload
          ),
        ],
        isIncDeleted: false,
      };
    case DELETE_SPONSORS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case RESET_SPONSORS_DELETED:
      return {
        ...state,
        isIncDeleted: true,
      };
    default:
      return state;
  }
};

export default sponsorsReducer;
