export interface IUserCreate {
  name: string
  email: string
  password: string
  confirmPassword: string
  teacher: boolean
}

export interface IUserLocal {
  token: string
}

export type UserLogin = Omit<IUserCreate, 'name' | 'confirmPassword' | 'teacher'>
