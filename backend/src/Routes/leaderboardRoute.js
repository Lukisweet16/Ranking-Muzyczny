import express from "express";
import { sendLeaderboard } from "../controllers/leaderboard.Controller.js";
const router = express.Router();

router.post("/leaderboard", sendLeaderboard);

export default router;
