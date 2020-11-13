import { Request, Response } from 'express'
import User from './user.model'
import userRouter from './user.routes'
import Joi from 'joi'
import { registerValidation, loginValidation } from './authValidation'
import bcryptjs from 'bcryptjs'
import UserI from './user.interface'
import jwt from 'jsonwebtoken'

export default class UserController {

  constructor() {}

  public register = async (req: Request, res: Response) => {

    const { error } = registerValidation(req.body)
    if (error) {
      return res.status(400).send(error)
    }

    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) {
      return res.status(400).send('Email already exists')
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(req.body.password, salt)

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    try {
      const savedUser = await user.save()
      res.send({user: user._id})
    } catch (error) {
      res.status(400).send(error)
    }


  }

  public login = async (req: Request, res: Response) => {
    const { error } = loginValidation(req.body);

    if (error) {
      return res.status(400).send(error)
    }

    const user = await User.findOne({ email: req.body.email }) as UserI
    if (!user) {
      return res.status(400).send('Email is not found')
    }

    const validPass = await bcryptjs.compare(req.body.password, user.password)
    if (!validPass) {
      return res.status(400).send('Invalid password')
    }

    const token = jwt.sign({ _id: user._id, role: user.role}, process.env.TOKEN_SECRET)
    res.header('authToken', token).send({ 
      email: user.email,
      role: user.role,
      token: token
    })
  }
}