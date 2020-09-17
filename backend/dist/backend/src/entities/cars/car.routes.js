"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_controller_1 = __importDefault(require("./car.controller"));
const carRouter = express_1.Router();
const carController = new car_controller_1.default();
carRouter.post('/', carController.post);
carRouter.get('/', carController.get);
carRouter.get('/:id', carController.getById);
carRouter.put('/:id', carController.updateById);
carRouter.delete('/:id', carController.deleteById);
// carRouter.get('/fill', carController.fill)
exports.default = carRouter;
//# sourceMappingURL=car.routes.js.map