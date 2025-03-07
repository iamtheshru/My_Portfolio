"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllPokemons_1 = __importDefault(require("../controllers/getAllPokemons"));
const v1PokemonRoutes = express_1.default.Router();
v1PokemonRoutes.get("/", getAllPokemons_1.default);
exports.default = v1PokemonRoutes;
