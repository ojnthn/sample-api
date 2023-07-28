import knex from "knex";
import * as dotenv from "dotenv";

dotenv.config();

const database = knex({
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DATABASE_PORT as unknown as number,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});

export default database;
