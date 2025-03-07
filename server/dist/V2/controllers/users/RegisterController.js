"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const fs_1 = require("fs");
const generateToken_1 = __importDefault(require("../../../utils/generateToken"));
const logger_1 = __importDefault(require("../../../utils/logger/logger"));
const RegisterController = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const allUsers = JSON.parse((0, fs_1.readFileSync)("./allUsers.json", "utf8"));
        const isExists = allUsers.find((u) => u.email.toLowerCase() === user.email.toLowerCase());
        if (isExists) {
            res.status(401).json({ error: "User already Exists" });
            return;
        }
        if (user.fullname && user.email && user.password) {
            const salt = yield bcryptjs_1.default.genSalt(10);
            const newPassword = yield bcryptjs_1.default.hash(user.password, salt);
            const userTocreate = Object.assign(Object.assign({}, user), { password: newPassword, id: new Date().getTime().toString(), avatar: "https://i.pravatar.cc/300" });
            const newUsers = [...allUsers, userTocreate];
            (0, fs_1.writeFileSync)("./allUsers.json", JSON.stringify(newUsers));
            // @ts-ignore
            delete userTocreate.password;
            res.json(Object.assign(Object.assign({}, userTocreate), { token: (0, generateToken_1.default)(userTocreate.id) }));
        }
        else {
            res.status(401).json({ error: "Please add all details" });
        }
    }
    catch (error) {
        res.status(500).json(error);
        logger_1.default.logError("Add employee", error);
    }
}));
exports.default = RegisterController;
