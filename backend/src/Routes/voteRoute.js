import express from "express";
import auth from "../auth.js";
import Vote from "../controllers/voteController.js";

const router = express.Router();
//only vote is using auth
router.post("/vote", auth, Vote);

export default router;
