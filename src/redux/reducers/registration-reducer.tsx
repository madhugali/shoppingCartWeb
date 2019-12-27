import { createReducer } from './redux-util';
import Reducer from './reducer';
import {ReduxAppConstants} from '../constants/redux-constants';
import { ReduxAction, ReduxReducerObject } from '../../index';

const initialState = {
    userRegistrationDetails: {
        isFetching: false,
        isSuccess: false,
        payload: {
            
        }
    }
};

class RegistrationReducer extends Reducer {

    static userRegisterRequest(state: any, action: ReduxAction): ReduxReducerObject {
        console.log("in userRegisterRequest");
       return {
            isSuccess: false,
            isFetching: true,
            payload: {
                
            },
        }
    }

    static userRegisterResponse(state: any, action: ReduxAction): ReduxReducerObject {
        console.log("in userRegisterResponse");
        console.log("API respnonse: "+ action.payload);
        return {
            isSuccess: true,
            isFetching: false,
            payload: {...action.payload}
        }
    }

}

const userHandlers = {
    [ReduxAppConstants.USER_REGISTER_REQUEST]: RegistrationReducer.userRegisterRequest,
    [ReduxAppConstants.USER_REGISTER_RESPONSE]: RegistrationReducer.userRegisterResponse,  
};

export const registrationReducer = createReducer(initialState, userHandlers);
