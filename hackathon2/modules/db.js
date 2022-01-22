const knex = require("knex");
const env = require("dotenv");
env.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: { rejectUnauthorized: false },
  },
});

const getCustomers = (id) => {
  return db("customer")
    .where("customer_id", id)
    .select("customer_id", "first_name", "last_name", "email");
};

module.exports = {
  getCustomers,
};
