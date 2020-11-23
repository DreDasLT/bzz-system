import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import { AppState } from '../../../state/reducers/rootReducer';

const NoAuthRoute = props => {
  const {isAuthenticated} = useSelector((state: AppState) => state.auth)
  
  if (!isAuthenticated) return <Redirect to="/login" />;
  return <Route {...props} />;
}

export default NoAuthRoute;