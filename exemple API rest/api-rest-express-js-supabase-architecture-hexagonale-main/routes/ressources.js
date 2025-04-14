import express from "express";
import getRessourcesAction from "../actions/ressources/getRessourcesAction.js";
import getOneRessourceAction from "../actions/ressources/getOneRessourceAction.js";
import createRessourceAction from "../actions/ressources/createRessourceAction.js";
import deleteRessourceAction from "../actions/ressources/deleteRessourceAction.js";
import updateRessourceAction from "../actions/ressources/updateRessourceAction.js";

const router = express.Router();

router
  .route("/")
  .get(getRessourcesAction) //call getRessourcesAction method and transmit req, res, next argument
  .post(createRessourceAction)
  .all((req, res, next) => next(405)); //method not allowed

router
  .route("/:id")
  .delete(deleteRessourceAction)
  .patch(updateRessourceAction)
  .get(getOneRessourceAction) //call getRessourcesAction method and transmit req, res, next argument
  .all((req, res, next) => next(405)); //method not allowed

export default router;
