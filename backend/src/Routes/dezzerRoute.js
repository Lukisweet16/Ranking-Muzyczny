import express from "express";
import { getRandomTrack } from "../controllers/deezerController.js";

const router = express.Router();

router.get("/chart/tracks", getRandomTrack);
export default router;