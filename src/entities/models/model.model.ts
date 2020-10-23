
import { Schema, model } from "mongoose"
import ModelI from './model.interface'

const ModelSchema = new Schema<ModelI>({
  name: String,
  prices: {
    type: Schema.Types.ObjectId,
    ref: "prices"
  },
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
})


const Model = model('models', ModelSchema)

export default Model