import ModelI from '../models/model.interface'

export default interface CarI {
  model: ModelI
  gasTank: number
  status: number
  location: Array<number>
  licensePlate: string
}