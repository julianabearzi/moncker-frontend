import { combineReducers } from 'redux';
import authReducer from './authUsersReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

export default rootReducer;
