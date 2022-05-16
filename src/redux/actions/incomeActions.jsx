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

const URL = process.env.REACT_APP_BACKEND_URL;

export const addIncomeFetching = () => ({
  type: ADD_INCOME_FETCHING,
});

export const addIncomeFulfilled = (payload) => ({
  type: ADD_INCOME_FULFILLED,
  payload,
});

export const addIncomeRejected = () => ({
  type: ADD_INCOME_REJECTED,
});

export const incomeAdded = () => ({
  type: RESET_INCOME_ADDED,
});

export const addIncome = (income) => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(addIncomeFetching());
  return fetch(`${URL}/api/income`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(income),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(incomeAdded());
      dispatch(addIncomeFulfilled(response));
    })
    .catch(() => {
      dispatch(addIncomeRejected());
    });
};

export const updateIncomeFetching = () => ({
  type: UPDATE_INCOME_FETCHING,
});

export const updateIncomeFulfilled = (payload) => ({
  type: UPDATE_INCOME_FULFILLED,
  payload,
});

export const updateIncomeRejected = () => ({
  type: UPDATE_INCOME_REJECTED,
});

export const incomeUpdated = () => ({
  type: RESET_INCOME_UPDATED,
});

export const updateIncome = (inc) => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(updateIncomeFetching());
  return fetch(`${URL}/api/income/${inc.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(inc),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(incomeUpdated());
      dispatch(updateIncomeFulfilled(response));
    })
    .catch(() => {
      dispatch(updateIncomeRejected());
    });
};

export const deleteIncomeFetching = () => ({
  type: DELETE_INCOME_FETCHING,
});

export const deleteIncomeFulfilled = (payload) => ({
  type: DELETE_INCOME_FULFILLED,
  payload,
});

export const deleteIncomeRejected = () => ({
  type: DELETE_INCOME_REJECTED,
});

export const incomeDeleted = () => ({
  type: RESET_INCOME_DELETED,
});

export const deleteIncome = (id) => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(deleteIncomeFetching());
  return fetch(`${URL}/api/income/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  })
    .then((data) => data.json())
    .then(() => {
      dispatch(incomeDeleted());
      dispatch(deleteIncomeFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteIncomeRejected());
    });
};
