import axios from 'axios';
import jwt from 'jsonwebtoken'
import store from '../state/store/store';
import { deleteMessage, setMessage } from './messageFunctions';
import history from './routingFunctions'

export const login = (data: any) => {
    return axios
    .post(process.env.REACT_APP_API_URL + 'user/login', data)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      store.dispatch(setCurrentUser(jwt.decode(token)))
      store.dispatch(deleteMessage())
    }).catch((error) => {
      store.dispatch(setMessage(error.response.data.message))
    });
}

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export const setCurrentUser = (user) => {
    return { 
      type: 'SET_CURRENT_USER', 
      user 
    }
}

export const logout = () => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken();
  store.dispatch(setCurrentUser(null))
  history.push('/login');
}