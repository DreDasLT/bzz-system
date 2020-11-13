import BaseController from '../../core/controllers/base.controller'
import cars from '../../../cars'
import { Request, Response } from 'express'
import Price from '../prices/price.model'
import Model from './model.model'
import ModelI from './model.interface'
import Car from '../cars/car.model'

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
      if (dbData.length) {
        dbData.sort((modelA, modelB) => modelA.name < modelB.name ? -1 : (modelA.name > modelB.name ? 1 : 0))
      }
      res.send(dbData)
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
      }).populate("prices")
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
      }).populate("prices")
    } catch (error) {
      res.status(400).send(`Error in PUT ${this.modelName}`)
    }
  }

  public getCarsById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      this.model.findOne({_id: id}, (error, result) => {
        if (!result) {
          res.status(404).send(`Can not find model with id: ${id}`)

          return
        }

        const carEntity = Car

        carEntity.find({model: {_id: id}}, (error, result) => {
          if (!result) {
            res.status(404).send(`Can not find any cars with given model id: ${id}`)
            return
          }

          if (!result.length) {
            res.status(404).send(`Can not find any cars with given model id: ${id}`)
            return
          }

          res.send(result)
        }).populate({
          path: 'model',
          populate: {
            path: 'prices'
          }
        })      
      })
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }
}