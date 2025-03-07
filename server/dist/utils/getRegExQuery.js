"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRegExQuery = (key, value) => ({
    [key]: { $regex: new RegExp(value, "i") },
});
exports.default = getRegExQuery;
