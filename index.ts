import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running`);
});

import { Pool } from "pg";
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};
connectToDB();
