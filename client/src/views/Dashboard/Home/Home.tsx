import React from 'react';
import { useSelector  } from 'react-redux';
import { AppState } from '../../../state/reducers/rootReducer';

const Home = () => {
  const { user } = useSelector((state: AppState) => state.auth);

  return (
    <div>
      <h1 className='text-3xl text-black pb-6'>Welcome, {user.name}</h1>
    </div>
  );
};

export default Home;
