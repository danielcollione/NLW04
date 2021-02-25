import "reflect-metadata";
import express from "express";
import createConnection from "./database"; //Por padrão ja reconhece que o index quem manda.
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };
