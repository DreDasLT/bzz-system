import { Request, Response } from "express"
import { Model, Schema, Types } from 'mongoose'

export default class BaseController {

  model: Model<any, any>
  modelName: string

  constructor(model: Model<any, any>) {
    this.model = model
    this.modelName = model.modelName
  }

  public post = async (req: Request, res: Response) => {
    try {
      const data = req.body
      const dbData = await this.model.create(data)
      if (dbData) {
        res.status(201).send(dbData)
      }
    } catch (error) {
      res.status(400).send(`Error in POST ${this.modelName}`)
    }
  }

  public get = async (req: Request, res: Response) => {
    try {
      const dbData = await this.model.find()
      res.send(dbData)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const dbData = await this.model.find({_id: id})
      if (!dbData) {
        res.status(404).send(`Can not find with id: ${id}`)
        return
      }
      res.send(dbData)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public updateById = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { id } = req.params

      const dbData = await this.model.findByIdAndUpdate(id, body, { useFindAndModify: false, new: true }, (error, result) => {
        if (!result) {
          res.status(404).send(`Can not find with id: ${id}`)

          return
        }

        res.send(result)
      })
    } catch (error) {
      res.status(400).send(`Error in PUT ${this.modelName}`)
    }
  }

  public deleteById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const dbData = await this.model.findByIdAndDelete({_id: id})
      if (dbData) {
        res.send(dbData)
      } else {
        res.status(404).send(`Can not find and delete with id: ${id}`)
      }
    } catch (error) {
      res.status(400).send(`Error in DELETE ${this.modelName}`)
    }
  }
}