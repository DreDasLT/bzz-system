import { Document } from 'mongoose';
export type Role = 'basic' | 'admin' | 'superadmin'

export default interface UserI extends Document {
  name: string
  email: string
  role: Role
  password: string
  date: Date
}