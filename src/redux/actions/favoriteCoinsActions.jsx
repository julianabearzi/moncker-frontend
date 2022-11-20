import {
  GET_FAVORITE_COINS_FETCHING,
  GET_FAVORITE_COINS_FULFILLED,
  GET_FAVORITE_COINS_REJECTED,
  UPDATE_FAVORITE_COINS_FETCHING,
  UPDATE_FAVORITE_COINS_FULFILLED,
  UPDATE_FAVORITE_COINS_REJECTED,
  RESET_FAVORITES_UPDATED,
} from '../types/favoritesTypes';

const URL = process.env.REACT_APP_BACKEND_URL;

export const getFavoriteCoinsFetching = () => ({
  type: GET_FAVORITE_COINS_FETCHING,
});

export const getFavoriteCoinsFulfilled = (payload) => ({
  type: GET_FAVORITE_COINS_FULFILLED,
  payload,
});

export const getFavoriteCoinsRejected = () => ({
  type: GET_FAVORITE_COINS_REJECTED,
});

export const getFavoriteCoins = (id) => (dispatch) => {
  dispatch(getFavoriteCoinsFetching());
  return fetch(`${URL}/api/users/user/${id}`)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getFavoriteCoinsFulfilled(response));
    })
    .catch(() => {
      dispatch(getFavoriteCoinsRejected());
    });
};

export const updateFavoritesFetching = () => ({
  type: UPDATE_FAVORITE_COINS_FETCHING,
});

export const updateFavoritesFulfilled = (payload) => ({
  type: UPDATE_FAVORITE_COINS_FULFILLED,
  payload,
});

export const updateFavoritesRejected = () => ({
  type: UPDATE_FAVORITE_COINS_REJECTED,
});

export const favoritesUpdated = () => ({
  type: RESET_FAVORITES_UPDATED,
});

export const updateFavorites = (fav) => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(updateFavoritesFetching());
  return fetch(`${URL}/api/users/favorites/${fav.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(fav.favorites),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(favoritesUpdated());
      dispatch(updateFavoritesFulfilled(response));
    })
    .catch(() => {
      dispatch(updateFavoritesRejected());
    });
};
