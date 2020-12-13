import ICar from '../../utils/entity/carType';

export interface ISetCars {
  readonly type: 'SET_CARS';
  cars: Array<ICar>;
}
export type CarActions =
| ISetCars