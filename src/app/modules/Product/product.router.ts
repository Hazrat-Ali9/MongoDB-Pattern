import { Router } from "express";
import { getAllProducts, getProductById } from "./product.controller";

const router:Router = Router();

router.get("/allProducts",getAllProducts);
router.get("/details/:id", getProductById)

export default router;