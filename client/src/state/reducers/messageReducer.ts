import { MessageActions } from '../actions/messageActions';

type MessageState = {
  message: string;
};
const initialState: MessageState = {
  message: '',
};
const MessageReducer = (state: MessageState = initialState, action: MessageActions) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message,
      };

    case 'DELETE_MESSAGE':
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
export default MessageReducer;
