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

const initialState = {
    isLoading: false,
    expensesList: [],
    error: false,
};

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSES_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case ADD_EXPENSES_FULFILLED:
            return {
                ...state,
                isLoading: false,
                expensesList: [...state.expensesList, action.payload],
            };
        case ADD_EXPENSES_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case UPDATE_EXPENSES_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_EXPENSES_FULFILLED:
            return {
                ...state,
                isLoading: false,
                list: state.list.map((exp) => {
                    if (exp._id === action.payload._id) {
                        const expUpdated = action.payload;
                        return expUpdated;
                    }
                    return exp;
                }),
            };
        case UPDATE_EXPENSES_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case DELETE_EXPENSES_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case DELETE_EXPENSES_FULFILLED:
            return {
                ...state,
                isLoading: false,
                list: [...state.list.filter((expenses) => expenses._id !== action.payload)],
            };
        case DELETE_EXPENSES_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default expensesReducer;
