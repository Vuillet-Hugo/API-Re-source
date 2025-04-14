import express from "express";

import "dotenv/config"; //lecture des variables d'environnement
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";

import indexRouter from "./routes/index.js";
import ressourcesRouter from "./routes/ressources.js";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import commentairesRouter from "./routes/commentaires.js";

//middlewares
import catch404Errors from "./middlewares/catch404errors.js";
import catchAllErrors from "./middlewares/catchAllErrors.js";

const app = express();

if (process.env.NODE_ENV === "development") app.use(logger("dev"));

app.use(helmet()); //sécurité
app.use(cors()); //sécurité liée aux clients web
app.use(express.json()); //parsing des données du body au format JSON
app.use(express.urlencoded({ extended: false })); //parsing des données du body au format URL Encode

app.use("/", indexRouter);
app.use("/ressources", ressourcesRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/commentaires", commentairesRouter); 

//génère une erreur 404 si aucune route n'a pas intercepté la requête HTTP
app.use(catch404Errors);

//gère toutes les erreurs
app.use(catchAllErrors);

export default app;
