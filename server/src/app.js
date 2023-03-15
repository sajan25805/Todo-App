import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { apiRoutes } from "./routes.js";
import helmet from "helmet";
import morgan from "morgan";

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin" }));
// app.use(morgan("common"));
app.use(cors());

app.use("/api",apiRoutes)

export default app;
