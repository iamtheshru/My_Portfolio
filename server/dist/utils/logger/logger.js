"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const devLogger_1 = __importDefault(require("./devLogger"));
const productionLogger_1 = __importDefault(require("./productionLogger"));
let winstonlogger;
if (process.env.NODE_ENV === "production") {
    winstonlogger = (0, productionLogger_1.default)();
}
else {
    winstonlogger = (0, devLogger_1.default)();
}
const logger = {
    info: (...d) => {
        winstonlogger.info(d[0], d[1]);
    },
    error: (...d) => {
        winstonlogger.info(d[0], d[1]);
    },
    warn: (...d) => {
        winstonlogger.info(d[0], d[1]);
    },
    debug: (...d) => {
        winstonlogger.info(d[0], d[1]);
    },
    log: (...args) => {
        if (args[1]) {
            winstonlogger.debug(`${args[0]} => %o`, args[1]);
        }
        else {
            if (typeof args[0] === "string") {
                winstonlogger.debug(args[0]);
            }
            else {
                winstonlogger.debug(`%o`, args[0]);
            }
        }
    },
    logError: (...args) => {
        if (args[1]) {
            winstonlogger.error(`${args[0]} => %o`, args[1]);
        }
        else {
            if (typeof args[0] === "string") {
                winstonlogger.error(args[0]);
            }
            else {
                winstonlogger.error(`%o`, args[0]);
            }
        }
    },
};
exports.default = logger;
