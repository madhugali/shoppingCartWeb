import { combineReducers } from 'redux';
import * as LoginReducer from './login-reducer';
import * as RegisterationReducer from './registration-reducer';
import * as ProductReducer from './product-reducer';

export default combineReducers({
    ...LoginReducer, ...RegisterationReducer, ...ProductReducer
});