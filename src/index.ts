import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import Routes from "./routes/index";
import { APP_PORT } from "./config/env";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("combined"));

dotenv.config();

app.use("/api/v1/", Routes);

app.listen(APP_PORT, () => {
  console.log("Server started on port 3000");
});
