"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get("/allProducts", product_controller_1.getAllProducts);
router.get("/details/:id", product_controller_1.getProductById);
exports.default = router;
