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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
const responseHandler_1 = require("../../utils/responseHandler");
const product_service_1 = require("./product.service");
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_service_1.getAllProductsFromDB)();
    (0, responseHandler_1.sendApiResponse)(res, 200, true, products);
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield (0, product_service_1.getProductByIdFromDB)(id);
    (0, responseHandler_1.sendApiResponse)(res, 200, true, product);
});
exports.getProductById = getProductById;
