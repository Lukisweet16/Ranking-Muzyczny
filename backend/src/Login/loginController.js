import { compare } from "bcrypt";
import pool from "../db/index.js";
import jwt from "jsonwebtoken";
const Login = async (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(401).json({
      message: "brak odpowiednich danych",
    });
  } else {
    try {
      const result = await pool.query("select * from users where email=$1", [
        Email,
      ]);
      if (result.rowCount === 0) {
        return res.status(401).json({
          message: "nie ma takiego uzytkownika",
        });
      }
      const userData = result.rows[0];
      const isCorrectPassword = await compare(Password, userData.hash_password);
      if (!isCorrectPassword) {
        return res.status(401).json({
          message: "złe haslo",
        });
      }
      const jwtToken = jwt.sign(
        {
          userId: userData.id,
          userEmail: userData.email,
          userCity: userData.city,
        },
        process.env.JWT_SECRET,
        { expiresIn: "8h" }
      );
      res.cookie("token", jwtToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 8,
      });
      return res.status(200).json({
        message: "zalogowano sie ",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Błąd serwera",
      });
    }
  }
};
export default Login;
