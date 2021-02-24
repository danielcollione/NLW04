import "reflect-metadata"; 
import express from "express";
import "./database"; //Por padrão ja reconhece que o index quem manda.
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("The server is running!"));
