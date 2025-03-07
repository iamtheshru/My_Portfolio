"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../middleware/authMiddleware");
const getAllPokemons_1 = __importDefault(require("../controllers/pokemon/getAllPokemons"));
const getPokemonTypes_1 = __importDefault(require("../controllers/pokemon/getPokemonTypes"));
const v3pokemonRoutes = express_1.default.Router();
v3pokemonRoutes.get("/", authMiddleware_1.authMiddleware, getAllPokemons_1.default);
v3pokemonRoutes.get("/types", authMiddleware_1.authMiddleware, getPokemonTypes_1.default);
exports.default = v3pokemonRoutes;
