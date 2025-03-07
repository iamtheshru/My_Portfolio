"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    employee_id: { type: String, unique: true },
    avatar: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    designation: { type: String },
    email: { type: String, unique: true },
    date_of_joining: { type: Date },
    last_working_day: { type: Date },
    mobile: { type: Number },
    alternate_mobile: { type: Number },
    date_of_birth: { type: Date },
    gender: { type: String },
    marital_status: { type: String },
    adhar_number: { type: Number },
    address: { type: String },
    locality: { type: String },
    city: { type: String },
    pincode: { type: String },
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", unique: true },
}, {
    timestamps: true,
});
employeeSchema.set("toJSON", {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
    virtuals: true,
});
const Employee = (0, mongoose_1.model)("Employee", employeeSchema);
exports.default = Employee;
