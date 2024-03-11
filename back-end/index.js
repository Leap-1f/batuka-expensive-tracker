import express from "express";
import { sql } from "./config/database.js";

const app = express();
const port = 8080;

app.get("/users", async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  res.send(data);
});
app.post("/users", async (req, res) => {
  const data =
    await sql`INSERT INTO users(name , email) VALUES('Daaa','Dulu@gmail.com') RETURNING *`;
  console.log(data);
  res.send(data);
});
app.post("/users/createTable", async (req, res) => {
  const data =
    await sql`CREATE TABLE durara(id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)`;
  console.log(data);
  res.send(data);
});
app.delete("/users", async (req, res) => {
  const data = await sql`DROP TABLE users`;
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(` hello world ${port}  `);
});
