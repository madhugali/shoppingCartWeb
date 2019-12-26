//=======================================================================================||
//A Utill file for model package. Logic concerned for model package files and are common,||
//those must be defined here                                                             ||
//=======================================================================================||
/**
 * @description Returns a function where input is state and action. This function is called by redux.
 * When called by redux for a specific action, this function finds an handler for that action and
 * executes that handler, if at all the handler for an action is not configured, then this function
 * throws an error.
 * @throws UnknowHandler
 */
export function createReducer(initialState:any , handlers: any) {
    return function reducer(state = initialState, action:any) {
        if (handlers.hasOwnProperty(action.type)) {
            console.log("Handling action : ", action.type);
            if (handlers[action.type] && typeof handlers[action.type] === "function")
                return handlers[action.type].apply(null, [state, action]);
            throw new Error("ErrorConstants.unknownHandler :"+ action.type);
        } else {
            // logInfo('Unknown action', action);
            return state;
        }
    }
}
/**
 * @description Returns initial state.
 */
export function getInitialState() {
    return { isFetching: true, isSuccess: true };
}