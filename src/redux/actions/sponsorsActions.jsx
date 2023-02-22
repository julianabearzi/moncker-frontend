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

const URL = process.env.REACT_APP_BACKEND_URL;

export const getSponsorsFetching = () => ({
  type: GET_SPONSORS_FETCHING,
});

export const getSponsorsFulfilled = (payload) => ({
  type: GET_SPONSORS_FULFILLED,
  payload,
});

export const getSponsorsRejected = () => ({
  type: GET_SPONSORS_REJECTED,
});

export const getSponsors = () => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(getSponsorsFetching());
  return fetch(`${URL}/api/sponsors`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(getSponsorsFulfilled(response));
    })
    .catch(() => {
      dispatch(getSponsorsRejected());
    });
};

export const addSponsorsFetching = () => ({
  type: ADD_SPONSORS_FETCHING,
});

export const addSponsorsFulfilled = (payload) => ({
  type: ADD_SPONSORS_FULFILLED,
  payload,
});

export const addSponsorsRejected = () => ({
  type: ADD_SPONSORS_REJECTED,
});

export const sponsorsAdded = () => ({
  type: RESET_SPONSORS_ADDED,
});

export const addSponsors = (sponsor) => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(addSponsorsFetching());
  return fetch(`${URL}/api/sponsors`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(sponsor),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(sponsorsAdded());
      dispatch(addSponsorsFulfilled(response));
    })
    .catch(() => {
      dispatch(addSponsorsRejected());
    });
};

export const updateSponsorsFetching = () => ({
  type: UPDATE_SPONSORS_FETCHING,
});

export const updateSponsorsFulfilled = (payload) => ({
  type: UPDATE_SPONSORS_FULFILLED,
  payload,
});

export const updateSponsorsRejected = () => ({
  type: UPDATE_SPONSORS_REJECTED,
});

export const sponsorsUpdated = () => ({
  type: RESET_SPONSORS_UPDATED,
});

export const updateSponsors = (spo) => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(updateSponsorsFetching());
  return fetch(`${URL}/api/sponsors/${spo.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(spo),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(sponsorsUpdated());
      dispatch(updateSponsorsFulfilled(response));
    })
    .catch(() => {
      dispatch(updateSponsorsRejected());
    });
};

export const deleteSponsorsFetching = () => ({
  type: DELETE_SPONSORS_FETCHING,
});

export const deleteSponsorsFulfilled = (payload) => ({
  type: DELETE_SPONSORS_FULFILLED,
  payload,
});

export const deleteSponsorsRejected = () => ({
  type: DELETE_SPONSORS_REJECTED,
});

export const sponsorsDeleted = () => ({
  type: RESET_SPONSORS_DELETED,
});

export const deleteSponsors = (id) => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(deleteSponsorsFetching());
  return fetch(`${URL}/api/sponsors/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  })
    .then((data) => data.json())
    .then(() => {
      dispatch(sponsorsDeleted());
      dispatch(deleteSponsorsFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteSponsorsRejected());
    });
};
