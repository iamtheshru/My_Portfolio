"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../middleware/authMiddleware");
const getAllPokemons_1 = __importDefault(require("../controllers/getAllPokemons"));
const pokemonRoutes = express_1.default.Router();
pokemonRoutes.get("/", authMiddleware_1.authMiddleware, getAllPokemons_1.default);
exports.default = pokemonRoutes;
