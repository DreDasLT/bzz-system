import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import jwt from 'jsonwebtoken'
import { Role } from './user.interface'

export interface IGetUserAuthInfoRequest extends Request {
  user: any
}

export const registerValidation = (data: any) => {
  return Joi.object({
    name: Joi.string()
      .min(4)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(4)
      .required()
  }).validate(data)
}

export const loginValidation = (data: any) => {
  return Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(4)
      .required()
  }).validate(data)
}

export const checkRole = (role: Role | Role[]) => {
  return (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    // const token = req.header('AuthToken')

    // if (!token) {
    //   return res.status(401).send('Access Denied')
    // }

    try {
      const bearerHeader = req.headers['authorization'];
      if (typeof bearerHeader === 'undefined') {
        return res.status(401).send("Access Denied")
      }

      const bearer = bearerHeader.split(' ')
      const bearerToken = bearer[1]

      const verified = jwt.verify(bearerToken, process.env.TOKEN_SECRET)
      req.user = verified;

      if (Array.isArray(role)) {
        if (!role.includes(req.user.role)) {
          return res.status(401).send("Access Denied")
        }
        next()
      } else if (typeof role === 'string') {
        if (req.user.role !== role) {
          return res.status(401).send("Access Denied")
        }
        next()
      }
    } catch (error) {
      return res.status(400).send('Invalid Token')
    }
  };
};