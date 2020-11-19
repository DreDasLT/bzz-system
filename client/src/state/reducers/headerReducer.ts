import { HeaderActions } from '../actions/headerActions';

type HeaderState = {
  headerOpen: boolean;
  profileOpen: boolean;
};
const initialState: HeaderState = {
  headerOpen: false,
  profileOpen: false,
};
const headerReducer = (
  state: HeaderState = initialState,
  action: HeaderActions
) => {
  switch (action.type) {
    case 'OPEN_HEADER':
      return {
        ...state,
        headerOpen: true,
      };
    case 'HIDE_HEADER':
      return {
        ...state,
        headerOpen: false,
      };
    case 'TOGGLE_HEADER':
      return {
        ...state,
        headerOpen: !state.headerOpen,
      };
    case 'OPEN_PROFILE':
      return {
        ...state,
        profileOpen: true,
      };
    case 'HIDE_PROFILE':
      return {
        ...state,
        profileOpen: false,
      };
    case 'TOGGLE_PROFILE':
      return {
        ...state,
        profileOpen: !state.profileOpen,
      };
    default:
      return state;
  }
};
export default headerReducer;
