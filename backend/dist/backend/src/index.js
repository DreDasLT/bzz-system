"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const routes_1 = __importDefault(require("./core/routes"));
const PORT = 3000;
const app = express_1.default();
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.listen(PORT, () => {
    console.log(`Started on: http://localhost:${PORT}`);
    database_1.connect();
});
//# sourceMappingURL=index.js.map