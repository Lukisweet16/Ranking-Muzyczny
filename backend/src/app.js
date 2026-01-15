import express from "express";

const App = express();
App.use(express.json());
App.get("/api/hello", (req, res) => {
  res.json({
    message: "czesc działam",
  });
});
export default App;
