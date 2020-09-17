
import { Schema, model } from "mongoose";
import PriceI from './price.interface';

const PriceSchema = new Schema<PriceI>({
  name: String,
  minute: Number,
  hour: Number,
  day: Number,
  week: Number,
  month: Number,
  km: Number,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
});


const Price = model('prices', PriceSchema);

export default Price;