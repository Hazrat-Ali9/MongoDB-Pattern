"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const pino_1 = __importDefault(require("pino"));
const pino_pretty_1 = __importDefault(require("pino-pretty"));
const log = (0, pino_1.default)({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
        },
    },
    prettifier: pino_pretty_1.default,
    timestamp: () => `,"time":"${(0, dayjs_1.default)().format()}"`,
});
exports.log = log;
