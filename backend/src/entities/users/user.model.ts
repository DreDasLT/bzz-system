import { Schema, model } from "mongoose"
import UserI from './user.interface'

const UserSchema = new Schema<UserI>({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  role: {
    type: String,
    default: 'basic',
    enum: ['basic', 'admin', 'superadmin']
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 4
  },
  date: {
    type: Date,
    default: Date.now
  }
})


const User = model<UserI>('users', UserSchema)

export default User