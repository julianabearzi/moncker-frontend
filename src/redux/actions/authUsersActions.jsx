import {
  LOG_IN_FETCHING,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  REVALIDATE_TOKEN_FETCHING,
  REVALIDATE_TOKEN_FINISHED,
} from '../types/authTypes';

const URL = process.env.REACT_APP_BACKEND_URL;

export const loginFetching = () => ({
  type: LOG_IN_FETCHING,
});

export const loginFulfilled = (_id, email, isAdmin) => ({
  type: LOG_IN_FULFILLED,
  payload: { _id, email, isAdmin },
});

export const loginRejected = () => ({
  type: LOG_IN_REJECTED,
});

export const logIn = (values) => (dispatch) => {
  dispatch(loginFetching());
  return fetch(`${URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then((data) => data.json())
    .then((response) => {
      if (response.errors === undefined) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(loginFulfilled(response._id, values.email, response.isAdmin));
      } else {
        dispatch(loginRejected());
      }
    })
    .catch(() => {
      dispatch(loginRejected());
    });
};

export const revalidateTokenFetching = () => ({
  type: REVALIDATE_TOKEN_FETCHING,
});

export const revalidateTokenFinished = () => ({
  type: REVALIDATE_TOKEN_FINISHED,
});

export const revalidateToken = () => (dispatch) => {
  const token = localStorage.getItem('token') || '';
  dispatch(revalidateTokenFetching());
  return fetch(`${URL}/api/users/renew`, {
    headers: {
      Authorization: token,
    },
  })
    .then((data) => data.json())
    .then((response) => {
      if (response.token !== undefined) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(
          loginFulfilled(response._id, response.email, response.isAdmin)
        );
      } else {
        dispatch(revalidateTokenFinished());
      }
    })
    .catch(() => {
      dispatch(revalidateTokenFinished());
    });
};

/*   export const signUpFetching = () => ({
    type: SIGN_UP_FETCHING,
  });
  
  export const signUpRejected = () => ({
    type: SIGN_UP_REJECTED,
  });
  
  export const signUp = (values) => (dispatch) => {
    dispatch(signUpFetching());
    return fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .then((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(loginFulfilled(response._id, values.username));
      })
      .catch(() => {
        dispatch(signUpRejected());
      });
  };
  
  export const logOut = () => ({
    type: LOG_OUT,
  });
  
  export const startLogout = () => {
    return (dispatch) => {
      localStorage.clear();
      dispatch(logOut());
    };
  }; */
