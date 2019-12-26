
export declare type ReduxReducerObject = {
    isSuccess: boolean,
    isFetching: boolean,
    payload: {
        [x: string]: any,
    },
}

export declare type ReduxAction = {
    type: string,
    payload: {
        [x: string]: any,
    },
}
