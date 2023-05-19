import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { dbConnect } from "./app/utils/dbConnect";
const app: Application = express();
// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// render ejs
app.set("view engine", "ejs");

// db connection
dbConnect();

// we will import all routes here
import productRoute from "./app/modules/Product/product.router";

// here will be default route
app.get("/", (req, res) => {
  res.render("index");
});
// custom routes path
app.use("/api/v1/products", productRoute);
export { app };
