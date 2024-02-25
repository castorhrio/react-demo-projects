import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./db/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/route.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["POST"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/restaurant", router);

dbConnection();

app.use(errorMiddleware);

export default app;
