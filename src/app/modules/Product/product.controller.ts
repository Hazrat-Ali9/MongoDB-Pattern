import { NextFunction, Request, Response } from "express";
import { sendApiResponse } from "../../utils/responseHandler";
import { getAllProductsFromDB, getProductByIdFromDB } from "./product.service";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductsFromDB();
  sendApiResponse(res, 200, true, products);
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductByIdFromDB(id);
  sendApiResponse(res, 200, true, product);
};
