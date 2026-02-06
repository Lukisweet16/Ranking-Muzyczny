import App from "./app.js";
import dotenv from "dotenv";
import registerRoute from "./Routes/registerRoute.js";
import loginRoute from "./Routes/loginRoute.js";
import dezzerRoute from "./Routes/dezzerRoute.js";
import voteRoute from "./Routes/voteRoute.js";
import leaderboardRoute from "./Routes/leaderboardRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;
App.use(cookieParser());
App.use("/", registerRoute);
App.use("/", loginRoute);
App.use("/", dezzerRoute);
App.use("/", voteRoute);
App.use("/", leaderboardRoute);
App.listen(PORT, () => {
  console.log(`działam na porcie ${PORT}`);
});
