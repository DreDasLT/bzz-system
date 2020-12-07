import { ModalActions } from '../actions/modalActions';

type ModalState = {
  isOpen: boolean;
};
const initialState: ModalState = {
  isOpen: false,
};
const modalReducer = (
  state: ModalState = initialState,
  action: ModalActions
) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        isOpen: false,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
export default modalReducer;
