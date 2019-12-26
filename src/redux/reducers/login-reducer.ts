import { createReducer } from './redux-util';
import Reducer from './reducer';
import {ReduxAppConstants} from '../constants/redux-constants';
import { ReduxAction, ReduxReducerObject } from '../../index';

const initialState = {
    loginAccountDetails: {
        isFetching: true,
        isSuccess: false,
        payload: {
            validUser: false,
            emailId: "",
        }
    }
};

class LoginReducer extends Reducer {

    static getLoggedInUserInfo(state: any, action: ReduxAction): ReduxReducerObject {
        console.log("In getLoggedInUserInfo reducer ");
        console.log("State: ", state);
        console.log("payload: ", action.payload);
        return {
            isSuccess: true,
            isFetching: true,
            payload: action.payload,
        }
    }

    static setLoggedInUserInfo(state: any, action: ReduxAction): ReduxReducerObject {
        console.log("In setLoggedInUserInfo reducer ");
        
        return {
            isSuccess: true,
            isFetching: false,
            payload: {...state.payload, userInfo: action.payload.response && {...action.payload.response}}
        }
    }

    static logOut(state: any, action: any){
        return {};
    }

}

const userHandlers = {
    [ReduxAppConstants.GET_LOGGED_IN_USER_INFO]: LoginReducer.getLoggedInUserInfo,
    [ReduxAppConstants.SET_LOGGED_IN_USER_INFO]: LoginReducer.setLoggedInUserInfo,    
    [ReduxAppConstants.LOGOUT]: LoginReducer.logOut,   
};

export const loginReducer = createReducer(initialState, userHandlers);
