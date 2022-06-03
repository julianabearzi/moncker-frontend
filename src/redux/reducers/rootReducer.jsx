import { combineReducers } from 'redux';
import authReducer from './authUsersReducer';
import modalReducer from './modalReducer';
import profileReducer from './profileReducer';
import incomeReducer from './incomeReducer';
import expensesReducer from './expensesReducer';
import coinsReducer from './coinsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  profile: profileReducer,
  income: incomeReducer,
  expenses: expensesReducer,
  coins: coinsReducer,
});

export default rootReducer;
