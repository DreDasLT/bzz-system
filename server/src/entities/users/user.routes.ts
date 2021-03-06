import { Router } from 'express'
import UserController from './user.controller'

const userRouter = Router()

const userController = new UserController()

userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)

export default userRouter