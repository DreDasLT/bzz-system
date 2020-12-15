export interface IOpenModalAction {
  readonly type: 'OPEN_MODAL';
  modalType: ModalTypes | null;
}
export interface IHideModalAction {
  readonly type: 'HIDE_MODAL';
}
export interface IToggleModalAction {
  readonly type: 'TOGGLE_MODAL';
  modalType: ModalTypes | null;
}
export type ModalActions =
| IOpenModalAction
| IHideModalAction
| IToggleModalAction

export enum ModalTypes {
  ADD_CAR,
  EDIT_CAR,
}