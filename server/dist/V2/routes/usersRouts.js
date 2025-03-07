"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RegisterController_1 = __importDefault(require("../controllers/users/RegisterController"));
const loginController_1 = __importDefault(require("../controllers/users/loginController"));
const usersRoutes = express_1.default.Router();
usersRoutes.post("/register", RegisterController_1.default);
usersRoutes.post("/login", loginController_1.default);
exports.default = usersRoutes;
