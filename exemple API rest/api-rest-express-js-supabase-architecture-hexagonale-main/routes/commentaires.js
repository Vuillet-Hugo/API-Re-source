import express from "express";
import createCommentaireController from "../actions/commentaires/createCommentaireAction.js";
import getCommentaireController from "../actions/commentaires/getCommentairesAction.js";
const router = express.Router();

router
    .route("/")
    .post(createCommentaireController)
    .all((req, res, next) => next(405));

router
    .route("/:id")
    .get(getCommentaireController)
    // .delete(deleteCommentaireController)
    // .patch(updateCommentaireController)
    .all((req, res, next) => next(405));

export default router;
