"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_routes_1 = __importDefault(require("../../entities/cars/car.routes"));
const price_routes_1 = __importDefault(require("../../entities/prices/price.routes"));
const model_routes_1 = __importDefault(require("../../entities/models/model.routes"));
const router = express_1.Router();
router.use('/car', car_routes_1.default);
router.use('/price', price_routes_1.default);
router.use('/model', model_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map