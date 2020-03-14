import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTER, PAGE_GLOBAL_URL } from 'constants/router';
import { CurrentUserContext } from 'contexts/currentUser';


const Routes = () => {
  const [{ isLoggedIn }] = useContext(CurrentUserContext);
  return (
    <Switch>
      {ROUTER.map(({
        url, component, security, exact,
      }) => {
        if (security) {
          return isLoggedIn && (<Route key={url} path={url} component={component} exact={exact} />);
        }
        return (
          <Route key={url} path={url} component={component} exact={exact} />
        );
      })}
      <Redirect to={PAGE_GLOBAL_URL} />
    </Switch>
  );
};

export default Routes;
