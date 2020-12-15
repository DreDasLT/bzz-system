import IModel from './modelType';

export default interface ICar {
  _id?: string
  gasTank?: number
  dateOfEntry?: Date
  lastUpdated?: Date
  location?: [number, number]
  status?: number
  model: string
  licensePlate: string
}