export interface IOpenHeaderAction {
  readonly type: 'OPEN_HEADER';
}
export interface IHideHeaderAction {
  readonly type: 'HIDE_HEADER';
}
export interface IToggleHeaderAction {
  readonly type: 'TOGGLE_HEADER';
}
export interface IOpenProfileAction {
  readonly type: 'OPEN_PROFILE';
}
export interface IHideProfileAction {
  readonly type: 'HIDE_PROFILE';
}
export interface IToggleProfileAction {
  readonly type: 'TOGGLE_PROFILE';
}
export type HeaderActions =
| IOpenHeaderAction
| IHideHeaderAction
| IToggleHeaderAction
| IOpenProfileAction
| IHideProfileAction
| IToggleProfileAction