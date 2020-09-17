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
exports.connect = exports.database = exports.disconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let database;
exports.database = database;
const connect = () => {
    // add your own uri below
    const uri = "mongodb+srv://bzz:bzz@cluster0.u9bse.mongodb.net/bzz?retryWrites=true&w=majority";
    if (database) {
        return;
    }
    mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    exports.database = database = mongoose_1.default.connection;
    database.once("open", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Connected to database");
    }));
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};
exports.connect = connect;
exports.disconnect = () => {
    if (!database) {
        return;
    }
    mongoose_1.default.disconnect();
};
//# sourceMappingURL=database.js.map