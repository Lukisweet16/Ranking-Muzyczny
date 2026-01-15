import App from "./app.js";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {
  console.log(`działam na porcie ${PORT}`);
});
