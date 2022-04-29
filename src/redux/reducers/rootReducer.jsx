import { combineReducers } from 'redux';
import authReducer from './authUsersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
