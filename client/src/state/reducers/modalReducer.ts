import { ModalActions, ModalTypes } from '../actions/modalActions';

type ModalState = {
  isOpen: boolean;
  modalType: ModalTypes | null;
};
const initialState: ModalState = {
  isOpen: false,
  modalType: null,
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
        modalType: action.modalType
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        isOpen: false,
        modalType: null
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isOpen: !state.isOpen,
        modalType: action.modalType
      };
    default:
      return state;
  }
};
export default modalReducer;
