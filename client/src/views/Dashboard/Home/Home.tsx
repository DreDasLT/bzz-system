import React, { useEffect, useState, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/reducers/rootReducer';
import { AuthActions } from '../../../state/actions/authActions';

const Home = () => {
  const { user, isAuthenticated } = useSelector((state: AppState) => state.auth);

  return (
    <div>
      <h1 className='text-3xl text-black pb-6'>Welcome, {user.name}</h1>
    </div>
  );
};

export default Home;
