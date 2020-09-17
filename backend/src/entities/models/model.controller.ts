import BaseController from '../../core/controllers/base.controller'
import cars from '../../../../cars'
import { Request, Response } from 'express'
import Price from '../prices/price.model'
import Model from './model.model'
import ModelI from './model.interface'

export default class ModelController extends BaseController {
  constructor() {
    super(Model)
  }

  // public fill = async (req: Request, res: Response) => {
  //   try {
  //     cars.forEach(async (car) => {
  //       const pricings = await Price.find({name: car.model});
  //       const pricingId = pricings[0]._id;
  //       const hi = await this.model.create({
  //         name: car.model,
  //         prices: pricingId
  //       })
  //     })
  //     res.send("Models has been successfully filled.")
  //   } catch (error) {
  //     console.log(error)
  //     res.status(400).send(`Error in POST ${error}`)
  //   }
  // }

  public get = async (req: Request, res: Response) => {
    try {
      const dbData = await this.model.find().populate("prices") as ModelI[]
      res.send(dbData)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const model = await this.model.findOne({_id: id}).populate("prices") as ModelI
      res.send(model)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public updateById = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { id } = req.params

      const model = await this.model.findByIdAndUpdate(id, body, { 
        useFindAndModify: false,
        new: true 
      }).populate("prices") as ModelI

      res.send(model)
    } catch (error) {
      res.status(400).send(`Error in PUT ${this.modelName}`)
    }
  }
}