import express from "express";
import cors from "cors";
const App = express();
App.use(cors());
App.use(express.json());
App.post("/login", (req, res) => {
  const { Email, Password } = req.body;
  console.log({ Email, Password });
  res.send();
});
export default App;
