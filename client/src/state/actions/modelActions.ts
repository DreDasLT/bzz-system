import IModel from '../../utils/entity/modelType';

export interface ISetModels {
  readonly type: 'SET_MODELS';
  models: Array<IModel>;
}
export type ModelActions =
| ISetModels