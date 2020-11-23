import { IDeleteMessageAction, ISetMessageAction } from '../state/actions/messageActions'

export const setMessage = (message: string): ISetMessageAction => {
  return {
    type: 'SET_MESSAGE',
    message
  }
}

export const deleteMessage = (): IDeleteMessageAction => {
  return {
    type: 'DELETE_MESSAGE'
  }
}