"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./app/utils/dbConnect");
const app = (0, express_1.default)();
exports.app = app;
// using cors
app.use((0, cors_1.default)());
// parse data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// render ejs
app.set("view engine", "ejs");
// db connection
(0, dbConnect_1.dbConnect)();
// we will import all routes here
const product_router_1 = __importDefault(require("./app/modules/Product/product.router"));
// here will be default route
app.get("/", (req, res) => {
    res.render("index");
});
// custom routes path
app.use("/api/v1/products", product_router_1.default);
