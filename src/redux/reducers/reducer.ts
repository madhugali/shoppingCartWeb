import {  ReduxReducerObject } from '../../index';
/**
 * @author ASDS Team
 * @description Contains common logic accress all files that fall under reducer.
 */
class Reducer {

    static errorReducer(state: object): ReduxReducerObject {
        return {payload: {...state} , isSuccess : false , isFetching : false};
    }
}

export default Reducer;