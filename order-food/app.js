import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./db/dbConnection";
import { errorMiddleware } from "./error/error";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

dbConnection();

app.use(errorMiddleware);

export default app;
