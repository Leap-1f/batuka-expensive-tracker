import { Router } from "express";
import { getAllUsers, postUser } from "../controller/user.js";

const user = Router();

user.route("/").get(getAllUsers);
user.route("/signup").post(postUser);
export { user };
