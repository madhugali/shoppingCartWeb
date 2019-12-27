import {  ReduxReducerObject } from '../../index';

class Reducer {

    static errorReducer(state: object): ReduxReducerObject {
        return {payload: {...state} , isSuccess : false , isFetching : false};
    }
}

export default Reducer;