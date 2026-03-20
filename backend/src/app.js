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

export default App;
