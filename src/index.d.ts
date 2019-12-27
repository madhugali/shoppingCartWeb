
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

export interface RouteComponentProps<Params extends { [K in keyof Params]?: string } = {}, C extends StaticContext = StaticContext, S = H.LocationState> {
    history: H.History;
    location: H.Location<S>;
    match: match<Params>;
    staticContext?: C;
  }