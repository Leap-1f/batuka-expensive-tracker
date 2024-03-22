import { sql } from "../../config/database.js";

export const getAllCategorys = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM categorys`;
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
export const postCategorys = async (req, res) => {
  const nweCategoryData = req.body;
  console.log(nweCategoryData);
  try {
    const data = await sql`INSERT INTO categorys(name)`;
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
