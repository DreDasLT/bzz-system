"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ModelSchema = new mongoose_1.Schema({
    name: String,
    prices: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "prices"
    },
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});
const Model = mongoose_1.model('models', ModelSchema);
exports.default = Model;
//# sourceMappingURL=model.model.js.map