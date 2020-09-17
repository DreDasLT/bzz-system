"use strict";
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
const base_controller_1 = __importDefault(require("../../core/controllers/base.controller"));
const model_model_1 = __importDefault(require("./model.model"));
class ModelController extends base_controller_1.default {
    constructor() {
        super(model_model_1.default);
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
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const dbData = yield this.model.find().populate("prices");
                res.send(dbData);
            }
            catch (error) {
                res.status(400).send(`Error in GET ${this.modelName}`);
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const model = yield this.model.findOne({ _id: id }).populate("prices");
                res.send(model);
            }
            catch (error) {
                res.status(400).send(`Error in GET ${this.modelName}`);
            }
        });
        this.updateById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { id } = req.params;
                const model = yield this.model.findByIdAndUpdate(id, body, {
                    useFindAndModify: false,
                    new: true
                }).populate("prices");
                res.send(model);
            }
            catch (error) {
                res.status(400).send(`Error in PUT ${this.modelName}`);
            }
        });
    }
}
exports.default = ModelController;
//# sourceMappingURL=model.controller.js.map