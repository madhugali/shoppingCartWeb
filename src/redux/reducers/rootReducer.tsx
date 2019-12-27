import { combineReducers } from 'redux';
import * as LoginReducer from './login-reducer';
import * as RegisterationReducer from './registration-reducer';

export default combineReducers({
    ...LoginReducer, ...RegisterationReducer
});