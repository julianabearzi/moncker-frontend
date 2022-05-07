import { combineReducers } from 'redux';
import authReducer from './authUsersReducer';
import modalReducer from './modalReducer';
import profileReducer from './profileReducer';
import incomeReducer from './incomeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  profile: profileReducer,
  income: incomeReducer,
});

export default rootReducer;
