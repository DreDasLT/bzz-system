import { AuthActions } from '../actions/authActions';
import { isEmpty } from 'lodash'
import IUser from '../../utils/entity/userType';
type AuthState = {
  isAuthenticated: boolean;
  user: IUser;
};
const initialState: AuthState = {
  isAuthenticated: false,
  user: {}
};
const authReducer = (state: AuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default:
      return state;
  }
};
export default authReducer;
