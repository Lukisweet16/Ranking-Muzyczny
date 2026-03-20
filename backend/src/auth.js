import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = (req, res, next) => {
  const userToken = req.cookies["token"];
  if (!userToken) {
    return res.status(401).json({ message: "brak autoryzacji" });
  }

  try {
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "token niepoprawny",
    });
  }
};
export default auth;
