import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTER } from 'constants/router';

const Routes = () => (
  <Switch>
    {ROUTER.map(({ url, component, exact }) => (
      <Route key={url} path={url} component={component} exact={exact} />
    ))}
  </Switch>
);

export default Routes;
