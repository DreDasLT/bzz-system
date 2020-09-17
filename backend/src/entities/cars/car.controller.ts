// import express, { Router, Request, Response } from 'express'
// import car from './car.model'

// const endpoints = express()

// // Get /cars
// endpoints.get('/', async (req: Request, res: Response) => {
//   try {
//     res.sendStatus(404)
//   } catch (e) {
//     res.status(500).send(e.toString())
//   }
// });

// // GET /cars/list
// endpoints.get('/list', async (req: Request, res: Response) => {
//   try {
//     const cars = await car.find()
//     res.json(cars)
//   } catch (e) {
//     res.status(500).send(e.toString())
//   }
// });

// endpoints.post('/', async (req: Request, res: Response) => {
//   try {
//     const data = req.body
//     console.log(req.body)
//     const dbData = await car.create(data)
//     console.log(dbData)
//     res.json(dbData)
//   } catch (e) {
//     res.status(500).send(e.toString());
//   }
// });

// export default endpoints;


import BaseController from '../../core/controllers/base.controller'
import Car from './car.model'
import cars from '../../../../cars'
import Model from '../models/model.model'
import { Request, Response } from 'express'
import CarI from './car.interface'

export default class CarController extends BaseController {
  constructor() {
    super(Car)
  }

  // public fill = async (req: Request, res: Response) => {
  //   try {
  //     cars.forEach(async (car) => {
  //       const model = await Model.find({name: car.name});
  //       const modelId = model[0]._id;
  //       const hi = await this.model.create({
  //         model: modelId,
  //         gasTank: 100,
  //         status: 0,
  //         location: [car.lat, car.long]
  //       })
  //     })
  //     res.send("Cars has been successfully filled.")
  //   } catch (error) {
  //     console.log(error)
  //     res.status(400).send(`Error in POST ${error}`)
  //   }
  // }

  public get = async (req: Request, res: Response) => {
    try {
      const cars = await this.model.find().populate({
        path: 'model',
        populate: {
          path: 'prices'
        }
    }) as CarI[]
      res.send(cars)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const car = await this.model.findOne({_id: id}).populate({
        path: 'model',
        populate: {
          path: 'prices'
        }
      }) as CarI
      res.send(car)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public updateById = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { id } = req.params

      const car = await this.model.findByIdAndUpdate(id, body, { 
        useFindAndModify: false,
        new: true 
      }).populate({
        path: 'model',
        populate: {
          path: 'prices'
        }
      }) as CarI

      res.send(car)
    } catch (error) {
      res.status(400).send(`Error in PUT ${this.modelName}`)
    }
  }
}