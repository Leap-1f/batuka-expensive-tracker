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
  const newUserData = req.body;
  console.log(newUserData);
  try {
    const data =
      await sql`SELECT * FROM categoryINSERT INTO users(name,email,password) VALUES('${newUserData.username}', '${password}')`;
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
