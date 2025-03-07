"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const v1PokemonRoutes_1 = __importDefault(require("./V1/routes/v1PokemonRoutes"));
const usersRouts_1 = __importDefault(require("./V2/routes/usersRouts"));
const v3PokemonRoutes_1 = __importDefault(require("./V2/routes/v3PokemonRoutes"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const logger_1 = __importDefault(require("./utils/logger/logger"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/check", (req, res) => {
    res.send("working....");
});
app.use("/v1/pokemon", v1PokemonRoutes_1.default);
app.use("/v3/pokemon", v3PokemonRoutes_1.default);
app.use("/v3/user", usersRouts_1.default);
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
let IP = process.env.IP;
if (IP) {
    // @ts-ignore
    app.listen(PORT, IP, () => {
        logger_1.default.info(`Base URL: http://${IP}:${PORT}`);
    });
}
else {
    app.listen(PORT, () => {
        logger_1.default.info(`Base URL: http://localhost:${PORT}`);
    });
}
