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
      res.send(dbData)
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
      res.send(dbData)
    } catch (error) {
      res.status(400).send(`Error in GET ${this.modelName}`)
    }
  }

  public updateById = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { id } = req.params

      const dbData = await this.model.findByIdAndUpdate(id, body, { useFindAndModify: false, new: true })

      res.send(dbData)

      console.log(dbData)
    } catch (error) {
      res.status(400).send(`Error in PUT ${this.modelName}`)
    }
  }

  public deleteById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const dbData = await this.model.findByIdAndDelete({_id: id})
      res.send(dbData)
    } catch (error) {
      res.status(400).send(`Error in DELETE ${this.modelName}`)
    }
  }
}