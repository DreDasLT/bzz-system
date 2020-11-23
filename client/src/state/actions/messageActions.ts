export interface ISetMessageAction {
  readonly type: 'SET_MESSAGE';
  message: string;
}

export interface IDeleteMessageAction {
  readonly type: 'DELETE_MESSAGE';
}

export type MessageActions =
| ISetMessageAction
| IDeleteMessageAction