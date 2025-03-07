"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginBodySchema = void 0;
const zod_1 = require("zod");
exports.loginBodySchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({
            required_error: "User name is required",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
    }),
});
