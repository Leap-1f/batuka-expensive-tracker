import express from "express";
import { sql } from "./config/database.js";
import { user } from "./src/router/user.js";
import { category } from "./src/router/category.js";

const app = express();
const port = 8080;

app.use("/categorys", category);

app.use("/users", user);

app.listen(port, () => {
  console.log(` hello world ${port}  `);
});
