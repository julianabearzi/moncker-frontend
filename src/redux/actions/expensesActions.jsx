import {
    ADD_EXPENSES_FETCHING,
    ADD_EXPENSES_FULFILLED,
    ADD_EXPENSES_REJECTED,
    UPDATE_EXPENSES_FETCHING,
    UPDATE_EXPENSES_FULFILLED,
    UPDATE_EXPENSES_REJECTED,
    DELETE_EXPENSES_FETCHING,
    DELETE_EXPENSES_FULFILLED,
    DELETE_EXPENSES_REJECTED,
} from '../types/expensesTypes';

const URL = process.env.REACT_APP_BACKEND_URL;

export const addExpensesFetching = () => ({
    type: ADD_EXPENSES_FETCHING,
});

export const addExpensesFulfilled = (payload) => ({
    type: ADD_EXPENSES_FULFILLED,
    payload,
});

export const addExpensesRejected = () => ({
    type: ADD_EXPENSES_REJECTED,
});

export const addExpenses = (expenses) => (dispatch) => {
    const token = localStorage.getItem('token') || '';
    dispatch(addExpensesFetching());
    return fetch(`${URL}/api/expenses`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(expenses),
    })
        .then((data) => data.json())
        .then((response) => {
            dispatch(addExpensesFulfilled(response));
        })
        .catch(() => {
            dispatch(addExpensesRejected());
        });
};

export const updateExpensesFetching = () => ({
    type: UPDATE_EXPENSES_FETCHING,
});

export const updateExpensesFulfilled = (payload) => ({
    type: UPDATE_EXPENSES_FULFILLED,
    payload,
});

export const updateExpensesRejected = () => ({
    type: UPDATE_EXPENSES_REJECTED,
});

export const updateExpenses = (exp) => (dispatch) => {
    const token = localStorage.getItem('token') || '';
    dispatch(updateExpensesFetching());
    return fetch(`${URL}/api/expenses/${exp.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(exp),
    })
        .then((data) => data.json())
        .then((response) => {
            dispatch(updateExpensesFulfilled(response));
        })
        .catch(() => {
            dispatch(updateExpensesRejected());
        });
};

export const deleteExpensesFetching = () => ({
    type: DELETE_EXPENSES_FETCHING,
});

export const deleteExpensesFulfilled = (payload) => ({
    type: DELETE_EXPENSES_FULFILLED,
    payload,
});

export const deleteExpensesRejected = () => ({
    type: DELETE_EXPENSES_REJECTED,
});

export const deleteExpenses = (id) => (dispatch) => {
    const token = localStorage.getItem('token') || '';
    dispatch(deleteIncomeFetching());
    return fetch(`${URL}/api/expenses/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: token,
        },
    })
        .then((data) => data.json())
        .then(() => {
            dispatch(deleteExpensesFulfilled(id));
        })
        .catch(() => {
            dispatch(deleteExpensesRejected());
        });
};
