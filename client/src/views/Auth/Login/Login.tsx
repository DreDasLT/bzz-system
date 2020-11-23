import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FlashMessage from '../../../components/FlashMessage';
import { AppState } from '../../../state/reducers/rootReducer';
import { login } from '../../../utils/authFunctions';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email,
      password,
    }).then(() => {
      history.push('/')
    });
  };

  return (
    <div className='flex h-screen bg-indigo-700'>
      <div className='w-full max-w-sm m-auto bg-indigo-100 rounded p-5'>
        <header>
          <img
            className='w-20 mx-auto mb-5'
            src='https://img.icons8.com/fluent/344/year-of-tiger.png'
          />
        </header>

        <FlashMessage />

        <form onSubmit={handleLoginSubmit}>
          <div>
            <label className='block mb-2 text-indigo-500' htmlFor='email'>
              E-Mail
            </label>
            <input
              className='w-full p-2 mb-6 text-indigo-700 border-b-2 outline-none focus:border-indigo-500'
              type='text'
              name='username'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2 text-indigo-500' htmlFor='password'>
              Password
            </label>
            <input
              className='w-full p-2 mb-6 text-indigo-700 border-b-2 outline-none focus:border-indigo-500'
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className='w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer'
              type='submit'
            />
          </div>
        </form>

        <footer>
          <a
            className='text-indigo-700 hover:text-pink-700 text-sm float-left'
            href='#'
          >
            Forgot Password?
          </a>
          <a
            className='text-indigo-700 hover:text-pink-700 text-sm float-right'
            href='#'
          >
            Create Account
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
