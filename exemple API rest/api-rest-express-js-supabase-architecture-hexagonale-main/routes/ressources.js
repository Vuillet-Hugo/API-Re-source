import express from "express";
import getRessourcesAction from "../actions/ressources/getRessourcesAction.js";
import getOneRessourceAction from "../actions/ressources/getOneRessourceAction.js";
import createRessourceAction from "../actions/ressources/createRessourceAction.js";
import deleteRessourceAction from "../actions/ressources/deleteRessourceAction.js";
import updateRessourceAction from "../actions/ressources/updateRessourceAction.js";

const router = express.Router();

router
  .route("/")
  .get(getRessourcesAction)
  .post(createRessourceAction)
  .all((req, res, next) => next(405));

router
  .route("/:id")
  .delete(deleteRessourceAction)
  .patch(updateRessourceAction)
  .get(getOneRessourceAction) 
  .all((req, res, next) => next(405)); 

export default router;
