"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PriceSchema = new mongoose_1.Schema({
    name: String,
    minute: Number,
    hour: Number,
    day: Number,
    week: Number,
    month: Number,
    km: Number,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});
const Price = mongoose_1.model('prices', PriceSchema);
exports.default = Price;
//# sourceMappingURL=price.model.js.map