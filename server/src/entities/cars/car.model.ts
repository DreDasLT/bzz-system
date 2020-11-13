import { Schema, model } from "mongoose"
import CarI from './car.interface'

const CarSchema = new Schema<CarI>({
  model: {
    type: Schema.Types.ObjectId,
    ref: "models",
    required: true,
  },
  gasTank: Number,
  status: Number,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  },
  location: {
    type: [Number],
    index: '2dsphere'
  }
})


const Car = model('cars', CarSchema)

export default Car