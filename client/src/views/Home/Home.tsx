import React, { useEffect, useState, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../state/reducers/rootReducer';
import { CountActions } from '../../state/actions/countActions';
import { NameActions } from '../../state/actions/nameActions';

const Home = () => {
  const { count } = useSelector((state: AppState) => state.count);
  const { name } = useSelector((state: AppState) => state.name);
  const countDispatch = useDispatch<Dispatch<CountActions>>();
  const nameDispatch = useDispatch<Dispatch<NameActions>>();

  const handleIncrement = () => {
    countDispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    countDispatch({ type: 'DECREMENT' });
  };
  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameDispatch({ type: 'SET_NAME', payload: e.target.value });
  };
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'car')
      .then(res => res.json())
      .then(result => console.log(result))
  }, [])

  return (
    <div>
      <h1 className='text-3xl text-black pb-6'>Home</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <input type='text' onChange={handleSetName} />
        {name}
      </div>
    </div>
  );
};

export default Home;
