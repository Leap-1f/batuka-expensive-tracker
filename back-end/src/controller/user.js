import { sql } from "../../config/database.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const postUser = async (req, res) => {
  console.log(req.body);
  const { username, mail, password, userBalance } = req.body;
  console.log(username, mail, password);
  console.log("ajilla");
  try {
    const data =
      await sql`INSERT INTO users(name,email,password) VALUES(${username},${mail},${password})`;
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
