import React, { Dispatch, useState } from 'react';
import { useSelector } from 'react-redux';
import { Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { AppState } from '../../state/reducers/rootReducer';
import Login from '../../views/Auth/Login/Login';
import NoAuthRoute from '../../views/Auth/NoAuthRoute/NoAuthRoute';
import Dashboard from '../../views/Dashboard/Dashboard';
import NotFound from '../../views/NotFound/NotFound';
import history from "../../utils/routingFunctions";


const Main = () => {
  
  return (
    <>
      <Router history={history}>
        <main className='w-full flex-grow'>
          <Switch>
            <Route exact path='/'>
              <Redirect to="/dashboard"/>
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
