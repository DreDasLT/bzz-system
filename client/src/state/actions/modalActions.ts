export interface IOpenModalAction {
  readonly type: 'OPEN_MODAL';
}
export interface IHideModalAction {
  readonly type: 'HIDE_MODAL';
}
export interface IToggleModalAction {
  readonly type: 'TOGGLE_MODAL';
}
export type ModalActions =
| IOpenModalAction
| IHideModalAction
| IToggleModalAction