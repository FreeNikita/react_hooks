import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTER } from './constants/router'

const Routes = () => {
    return (
        <Switch>
            {
                ROUTER.map(({url, component}) => (
                    <Route key={url} path={url} component={component} exact/>
                ))
            }
        </Switch>
    )
}

export default Routes