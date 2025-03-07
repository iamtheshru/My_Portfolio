"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, printf } = winston_1.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${level}: ${message}`;
});
const devLogger = () => {
    return (0, winston_1.createLogger)({
        level: "debug",
        format: combine(winston_1.format.prettyPrint(), winston_1.format.splat(), winston_1.format.colorize(), myFormat),
        transports: [new winston_1.transports.Console()],
    });
};
exports.default = devLogger;
