import express from "express";
import cors from "cors";
const App = express();
App.use(cors());
App.use(express.json());

export default App;
