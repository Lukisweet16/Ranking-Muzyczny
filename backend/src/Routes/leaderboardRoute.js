import express from "express";
import { sendLeaderboard } from "../controllers/leaderboardController.js";
const router = express.Router();

router.post("/leaderboard", sendLeaderboard);

export default router;
