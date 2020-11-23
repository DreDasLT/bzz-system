import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import Main from './core/Main/Main';
import * as serviceWorker from './core/serviceWorker';
import { Provider } from 'react-redux'
import store from './state/store/store'
import { setAuthorizationToken, setCurrentUser } from './utils/authFunctions';
import jwt from 'jsonwebtoken';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
