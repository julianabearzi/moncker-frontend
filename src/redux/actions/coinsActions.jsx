import {
  GET_COINS_FETCHING,
  GET_COINS_FULFILLED,
  GET_COINS_REJECTED,
} from '../types/coinTypes';

const cURL = 'https://rest.coinapi.io/v1/assets/';

export const getCoinsFetching = () => ({
  type: GET_COINS_FETCHING,
});

export const getCoinsFulfilled = (payload) => ({
  type: GET_COINS_FULFILLED,
  payload,
});

export const getCoinsRejected = () => ({
  type: GET_COINS_REJECTED,
});

export const getCoins = () => (dispatch) => {
  dispatch(getCoinsFetching());
  return fetch(`${cURL}`, {
    method: 'GET',
    headers: { 'X-CoinAPI-Key': 'FC123E96-6D61-4EF4-B996-DF41D86E4AFC' }
    // B050EE87-F75E-455D-B827-CDEA9CF7B04B  AAE8D740-4C7E-4D95-BCA0-47AB5A13C844
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(getCoinsFulfilled(response));
    })
    .catch(() => {
      dispatch(getCoinsRejected());
    });
};
