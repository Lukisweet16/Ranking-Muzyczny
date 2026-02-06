import express from "express";
import cors from "cors";
import { auth } from "./auth.js";
const App = express();
App.use(
  cors({
    credentials: true,
  }),
);
App.use(express.json());
App.get("/test-auth", auth, (req, res) => {
  res.json({
    message: "Middleware działa 🎉",
    user: req.user,
  });
});
App.get("/debug", (req, res) => {
  res.json(req.headers);
});

export default App;
