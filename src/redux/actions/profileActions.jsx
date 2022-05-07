import {
  USER_PROFILE_FETCHING,
  USER_PROFILE_FULFILLED,
  USER_PROFILE_REJECTED,
} from '../types/profileTypes';

const URL = process.env.REACT_APP_BACKEND_URL;

export const userProfileFetching = () => ({
  type: USER_PROFILE_FETCHING,
});

export const userProfileFulfilled = (payload) => ({
  type: USER_PROFILE_FULFILLED,
  payload,
});

export const userProfileRejected = () => ({
  type: USER_PROFILE_REJECTED,
});

export const userProfile = () => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(userProfileFetching());
  return fetch(`${URL}/api/users/profile`, {
    headers: {
      Authorization: token,
    },
  })
    .then((data) => data.json())
    .then((response) => {
      if (response._id !== undefined) {
        dispatch(userProfileFulfilled(response));
      } else {
        dispatch(userProfileRejected());
      }
    })
    .catch(() => {
      dispatch(userProfileRejected());
    });
};
