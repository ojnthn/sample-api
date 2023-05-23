import knex from "knex";

const database = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "root",
    password: "root",
    database: "sampleApi",
  },
});

export default database;
