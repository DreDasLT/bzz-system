import ICar from '../../utils/entity/carType';
import { CarActions } from '../actions/carActions';

type CarState = {
  cars: Array<ICar>;
};
const initialState: CarState = {
  cars: []
};
const carReducer = (state: CarState = initialState, action: CarActions) => {
  switch (action.type) {
    case 'SET_CARS':
      return {
        cars: action.cars
      };
    default:
      return state;
  }
};
export default carReducer;
