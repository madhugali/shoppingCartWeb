import { combineReducers } from 'redux';
import * as LoginReducer from './login-reducer';

export default combineReducers({
    ...LoginReducer,
});