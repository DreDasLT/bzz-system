export type Role = 'basic' | 'admin' | 'superadmin'

export default interface IUser {
  _id?: string;
  role?: Role;
  email?: string;
  name?: string;
}