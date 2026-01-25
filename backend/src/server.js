import App from "./app.js";
import dotenv from "dotenv";
import registerRoute from "./Register/registerRoute.js";
import loginRoute from "./Login/loginRoute.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
App.use("/", registerRoute);
App.use("/", loginRoute);
App.listen(PORT, () => {
  console.log(`działam na porcie ${PORT}`);
});
