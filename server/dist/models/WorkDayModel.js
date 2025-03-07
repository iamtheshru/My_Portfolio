"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const workDistributionSchema = new mongoose_1.Schema({
    name: { type: String }, // ghanti/topali/roaster
    employees: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Employee", unique: true }],
    wage: { type: Number },
    wage_type: { type: String }, // per day/ per hr/ per beg
});
const workDayaSchema = new mongoose_1.Schema({
    target: { type: Number },
    date: { type: Date },
    achieved: { type: Number },
    work_distribution: [workDistributionSchema],
    started_at: { type: Date },
    ended_at: { type: Date },
    note: { type: String },
    factory: { type: String },
}, {
    timestamps: true,
});
workDayaSchema.set("toJSON", {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
    virtuals: true,
});
const WorkDay = (0, mongoose_1.model)("WorkDay", workDayaSchema);
exports.default = WorkDay;
