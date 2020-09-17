"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const model_controller_1 = __importDefault(require("./model.controller"));
const modelRouter = express_1.Router();
const modelController = new model_controller_1.default();
modelRouter.post('/', modelController.post);
modelRouter.get('/', modelController.get);
modelRouter.get('/:id', modelController.getById);
modelRouter.put('/:id', modelController.updateById);
modelRouter.delete('/:id', modelController.deleteById);
// modelRouter.get('/fill', modelController.fill)
exports.default = modelRouter;
//# sourceMappingURL=model.routes.js.map