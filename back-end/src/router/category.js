import { Router } from "express";
import { getAllCategorys, postCategorys } from "../controller/category.js";

const category = Router();

category.route("/").get(getAllCategorys);
category.route("/postCategory").post(postCategorys);
export { category };
