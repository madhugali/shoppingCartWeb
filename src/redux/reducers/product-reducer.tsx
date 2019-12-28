import { createReducer } from "./redux-util";
import Reducer from "./reducer";
import { ReduxAppConstants } from "../constants/redux-constants";
import { ReduxAction, ReduxReducerObject } from "../../index";

const initialState = {
    isFetching: false,
    isSuccess: false,
    items: [
      { id: "1", name: "Computer", price: 1722.44, quantity: 1 },
      { id: "2", name: "Phone", price: 522.14, quantity: 1 },
      { id: "3", name: "Book", price: 10.0, quantity: 1 },
    ]
};

//TODO: Need to update this
class ProductReducer extends Reducer {

    static userRegisterRequest(state: any, action: ReduxAction): ReduxReducerObject {
        console.log("in userRegisterRequest");
       return {
            isSuccess: false,
            isFetching: true,
            payload: {
                
            },
        }
    }
}

const userHandlers = {
    [ReduxAppConstants.USER_REGISTER_REQUEST]: ProductReducer.userRegisterRequest,  
};

export const productReducer = createReducer(initialState, userHandlers);
