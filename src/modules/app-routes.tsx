import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Registration/Registration';

function Routes() {
    return (
        <HashRouter>
            <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={Login} />
                {/*This is the default component that will be loaded if none of the above route matches*/}
            {<Route component={Login} />}
            </Switch>
        </HashRouter>
    );
}

export default Routes;
