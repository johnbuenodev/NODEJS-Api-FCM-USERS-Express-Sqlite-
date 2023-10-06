import express from "express";

import router from "./routes.js";

import { createTableUser } from "./src/controllers/usuario.js";

const app = express();

createTableUser();

app.use(express.json());

app.use(router);

let PORT = 3001;

app.listen(PORT , () => console.log("Running in :", PORT));