import ICar from '../../utils/entity/carType';

export interface ISetCars {
  readonly type: 'SET_CARS';
  cars: Array<ICar>;
}
export interface ISetSelectedCar {
  readonly type: 'SET_SELECTED_CAR';
  selectedCar: ICar;
}
export type CarActions =
| ISetCars
| ISetSelectedCar
