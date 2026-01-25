import bcrypt, { hash } from "bcrypt";
import pool from "../db/index.js";

const register = async (req, res) => {
  const { Email, Password } = req.body;

  console.log(Email, Password);
  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    await pool.query("INSERT INTO users (email,hash_password) VALUES ($1,$2)", [
      Email,
      hashedPassword,
    ]);
    res.json({
      message: "zarejestrowano pomyslnie",
    });
  } catch (err) {
    console.error(err);
    if (err.code === "23505") {
      return res
        .status(400)
        .json({ message: "Użytkownik o podanym emailu już istnieje" });
    } else {
      res.status(500).json({ message: `${err.detail}` });
    }
  }
};
export default register;
