import { Client, Pool } from "pg";
import { configDotenv } from "dotenv";
configDotenv();
const pool = new Pool({
  client_encoding: 'utf8'
});

export default pool;
