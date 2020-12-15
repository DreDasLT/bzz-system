import BaseController from '../../core/controllers/base.controller'
import Car from './car.model'
import cars from '../../../cars'
import Model from '../models/model.model'
import { Request, Response } from 'express'
import CarI from './car.interface'

export default class CarController extends BaseController {
  constructor() {
    super(Car)
  }

  public get = async (req: Request, res: Response) => {
    try {
      const cars = await this.model.find() as CarI[]
      res.send(cars)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      this.model.findOne({_id: id}, (error, result) => {
        if (!result) {
          res.status(404).send(`Can not find with id: ${id}`)

          return
        }

        res.send(result)        
      }).populate({
        path: 'model',
        populate: {
          path: 'prices'
        }
      })

    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public updateById = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { id } = req.params

      this.model.findByIdAndUpdate(id, body, { 
        useFindAndModify: false,
        new: true 
      }, (error, result) => {
        if (!result) {
          res.status(404).send(`Can not update with id: ${id}`)

          return
        }

        res.send(result)
      }).populate({
        path: 'model',
        populate: {
          path: 'prices'
        }
      })
    } catch (error) {
      res.status(400).send(`Error in PUT ${this.modelName}`)
    }
  }
}