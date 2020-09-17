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
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    constructor(model) {
        this.post = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const dbData = yield this.model.create(data);
                res.send(dbData);
            }
            catch (error) {
                res.status(400).send(`Error in POST ${this.modelName}`);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const dbData = yield this.model.find();
                res.send(dbData);
            }
            catch (error) {
                res.status(400).send(`Error in GET ${this.modelName}`);
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const dbData = yield this.model.find({ _id: id });
                res.send(dbData);
            }
            catch (error) {
                res.status(400).send(`Error in GET ${this.modelName}`);
            }
        });
        this.updateById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { id } = req.params;
                const dbData = yield this.model.findByIdAndUpdate(id, body, { useFindAndModify: false, new: true });
                res.send(dbData);
                console.log(dbData);
            }
            catch (error) {
                res.status(400).send(`Error in PUT ${this.modelName}`);
            }
        });
        this.deleteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const dbData = yield this.model.findByIdAndDelete({ _id: id });
                res.send(dbData);
            }
            catch (error) {
                res.status(400).send(`Error in DELETE ${this.modelName}`);
            }
        });
        this.model = model;
        this.modelName = model.modelName;
    }
}
exports.default = BaseController;
//# sourceMappingURL=base.controller.js.map