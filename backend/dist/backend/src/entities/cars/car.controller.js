"use strict";
// import express, { Router, Request, Response } from 'express'
// import car from './car.model'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const base_controller_1 = __importDefault(require("../../core/controllers/base.controller"));
const car_model_1 = __importDefault(require("./car.model"));
class CarController extends base_controller_1.default {
    constructor() {
        super(car_model_1.default);
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
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cars = yield this.model.find().populate({
                    path: 'model',
                    populate: {
                        path: 'prices'
                    }
                });
                res.send(cars);
            }
            catch (error) {
                res.status(400).send(`Error in GET ${this.modelName}`);
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const car = yield this.model.findOne({ _id: id }).populate({
                    path: 'model',
                    populate: {
                        path: 'prices'
                    }
                });
                res.send(car);
            }
            catch (error) {
                res.status(400).send(`Error in GET ${this.modelName}`);
            }
        });
        this.updateById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { id } = req.params;
                const car = yield this.model.findByIdAndUpdate(id, body, {
                    useFindAndModify: false,
                    new: true
                }).populate({
                    path: 'model',
                    populate: {
                        path: 'prices'
                    }
                });
                res.send(car);
            }
            catch (error) {
                res.status(400).send(`Error in PUT ${this.modelName}`);
            }
        });
    }
}
exports.default = CarController;
//# sourceMappingURL=car.controller.js.map