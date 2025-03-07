"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const salarySchema = new mongoose_1.Schema({
    employee: { type: mongoose_1.Schema.Types.ObjectId, ref: "Employee" },
    amount: { type: Number },
    date: { type: Date },
    work: { type: mongoose_1.Schema.Types.ObjectId, ref: "WorkDay" }, // workday
    type: { type: String },
    note: { type: String },
}, {
    timestamps: true,
});
salarySchema.set("toJSON", {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
    virtuals: true,
});
const Salary = (0, mongoose_1.model)("Salary", salarySchema);
exports.default = Salary;
