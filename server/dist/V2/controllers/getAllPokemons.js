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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const capitalize_1 = __importDefault(require("../../utils/capitalize"));
const logger_1 = __importDefault(require("../../utils/logger/logger"));
const pokemonData_1 = __importDefault(require("../../utils/pokeUtils/pokemonData"));
const getAllPokemons = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let page = req.query.page ? parseInt(req.query.page) : 1;
        let q = req.query.q;
        let per_page = req.query.per_page
            ? parseInt(req.query.per_page)
            : 8;
        let type = req.query.type && (0, capitalize_1.default)(req.query.type);
        logger_1.default.log("type ===>", type);
        const IP = process.env.IP;
        let nextLink = null;
        let data = [];
        let total = 0;
        if (q) {
            data = pokemonData_1.default.filter((d) => d.name.english.toLowerCase().includes(q.toLowerCase()));
        }
        else {
            data = pokemonData_1.default;
        }
        if (type) {
            data = data.filter((d) => d.type.includes(type));
        }
        total = data.length;
        data = data.slice((page - 1) * per_page, page * per_page);
        if (total > page * per_page) {
            nextLink = `http://${IP}:5000/v3/pokemon?page=${page + 1}&q=${q || ""}&type=${type || ""}`;
        }
        res.json({
            data,
            total,
            next: nextLink,
        });
    }
    catch (error) {
        res.status(500).json(error);
        logger_1.default.logError("get all pokemon", error);
    }
}));
exports.default = getAllPokemons;
