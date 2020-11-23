import IUser from '../../utils/entity/userType';

export interface ISetCurrentUserAction {
  readonly type: 'SET_CURRENT_USER';
  user: IUser;
}
export type AuthActions =
| ISetCurrentUserAction