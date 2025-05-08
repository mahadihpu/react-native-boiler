import { Client } from "node-postgres";

export const client = new Client({
  user: process.env.EXPO_PRIVATE_NILE_USERNAME,
  password: process.env.EXPO_PRIVATE_NILE_PASSWORD,
  host: "eu-central-1.db.thenile.dev",
  port: 5432,
  database: "react_native_campus_app",
});
