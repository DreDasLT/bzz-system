import IModel from '../../utils/entity/modelType';
import { ModelActions } from '../actions/modelActions';

type ModelState = {
  models: Array<IModel>;
};
const initialState: ModelState = {
  models: []
};
const modelReducer = (state: ModelState = initialState, action: ModelActions) => {
  switch (action.type) {
    case 'SET_MODELS':
      return {
        models: action.models
      };
    default:
      return state;
  }
};
export default modelReducer;
