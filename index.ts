import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = 8080;

app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running`);
});
