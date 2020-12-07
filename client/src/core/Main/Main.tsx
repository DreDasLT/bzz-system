import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../views/Auth/Login/Login';
import NoAuthRoute from '../../views/Auth/NoAuthRoute/NoAuthRoute';
import Dashboard from '../../views/Dashboard/Dashboard';
import NotFound from '../../views/NotFound/NotFound';
import history from '../../utils/routingFunctions';

const Main = () => {

  return (
    <>
      <Router history={history}>
        <main className='w-full flex-grow'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/dashboard' />
            </Route>
            <NoAuthRoute path='/dashboard'>
              <Dashboard />
            </NoAuthRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default Main;
