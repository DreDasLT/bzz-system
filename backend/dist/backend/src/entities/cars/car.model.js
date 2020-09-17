"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    model: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "models",
        required: true,
    },
    gasTank: Number,
    status: Number,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    },
    location: {
        type: [Number],
        index: '2dsphere'
    }
});
const Car = mongoose_1.model('cars', CarSchema);
exports.default = Car;
//# sourceMappingURL=car.model.js.map