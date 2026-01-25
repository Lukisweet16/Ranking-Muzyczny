import express from "express";
import login from "./loginController.js";
const loginRoute = express.Router();

loginRoute.post("/login", login);
export default loginRoute;
