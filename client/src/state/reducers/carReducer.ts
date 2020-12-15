import ICar from '../../utils/entity/carType';
import { CarActions } from '../actions/carActions';

type CarState = {
  cars: Array<ICar>;
  selectedCar: ICar | null;
};
const initialState: CarState = {
  cars: [],
  selectedCar: null
};
const carReducer = (state: CarState = initialState, action: CarActions) => {
  switch (action.type) {
    case 'SET_CARS':
      return {
        ...state,
        cars: action.cars
      };
      case 'SET_SELECTED_CAR':
        return {
          ...state,
          selectedCar: action.selectedCar
        };
    default:
      return state;
  }
};
export default carReducer;
