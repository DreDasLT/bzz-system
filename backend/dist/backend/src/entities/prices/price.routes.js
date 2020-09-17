"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const price_controller_1 = __importDefault(require("./price.controller"));
const priceRouter = express_1.Router();
const priceController = new price_controller_1.default();
priceRouter.post('/', priceController.post);
priceRouter.get('/', priceController.get);
priceRouter.get('/:id', priceController.getById);
priceRouter.put('/:id', priceController.updateById);
priceRouter.delete('/:id', priceController.deleteById);
// priceRouter.get('/fill', priceController.fill)
exports.default = priceRouter;
//# sourceMappingURL=price.routes.js.map