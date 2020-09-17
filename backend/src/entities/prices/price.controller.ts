import BaseController from '../../core/controllers/base.controller'
import Price from './price.model'
import cars from '../../../../cars'
import { Request, Response } from 'express'
import PriceI from './price.interface'

export default class PriceController extends BaseController {
  constructor() {
    super(Price)
  }

  // public fill = async (req: Request, res: Response) => {
  //   try {
  //     cars.forEach(async (car) => {
  //       await this.model.create({
  //         name: car.model,
  //         ...car.prices
  //       })
  //     })
  //     res.send("Prices has been successfully filled.")
  //   } catch (error) {
  //     console.log(error)
  //     res.status(400).send(`Error in POST ${error}`)
  //   }
  // }

  public get = async (req: Request, res: Response) => {
    try {
      const prices = await this.model.find() as PriceI[]
      res.send(prices)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const price = await this.model.findOne({_id: id}) as PriceI
      res.send(price)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public updateById = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { id } = req.params

      const price = await this.model.findByIdAndUpdate(id, body, { 
        useFindAndModify: false,
        new: true 
      }) as PriceI

      res.send(price)
    } catch (error) {
      res.status(400).send(`Error in PUT ${this.modelName}`)
    }
  }
}