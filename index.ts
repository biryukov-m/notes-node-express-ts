import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();

const app: Express = express();
const port = 1337;

/** Routes */
app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
