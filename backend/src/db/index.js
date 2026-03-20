import { Client, Pool } from "pg";
import { configDotenv } from "dotenv";
configDotenv();
const pool = new Pool({
  client_encoding: "utf8",
});
//testing db connection
pool
  .query("select NOW()")
  .then((res) => {
    console.log("Database connected:", res.rows[0]);
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

export default pool;
