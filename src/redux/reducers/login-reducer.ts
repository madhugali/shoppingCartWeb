import { createReducer } from './redux-util';
import Reducer from './reducer';
import {ReduxAppConstants} from '../constants/redux-constants';
import { ReduxAction, ReduxReducerObject } from '../../index';

const initialState = {
    loginAccountDetails: {
        isFetching: false,
        isSuccess: false,
        payload: {
           
        }
    }
};

class LoginReducer extends Reducer {

    static getLoggedInUserInfo(state: any, action: ReduxAction): ReduxReducerObject {
        console.log("In getLoggedInUserInfo reducer ");
        console.log("State: ", state);
        console.log("payload: ", action.payload);
        return {
            isSuccess: false,
            isFetching: true,
            payload: {
                validLogin: false,
                token: "",
            },
        }
    }

    static setLoggedInUserInfo(state: any, action: ReduxAction): ReduxReducerObject {
        if(action.payload.token && action.payload.token.length > 0 ){
            return {
                isSuccess: true,
                isFetching: false,
                payload: {
                    validLogin: true,
                    token: action.payload.token,
                }
            }
        }
        else{
            return {
                isSuccess: true,
                isFetching: false,
                payload: {
                    validLogin: false,
                    token: "",
                }
            }
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
