import express from "express";
import getUsersAction from "../actions/users/getUsersAction.js";
import getOneUserAction from "../actions/users/getOneUserAction.js";

const router = express.Router();

router
  .route("/")
  .get(getUsersAction)
  .all((req, res, next) => next(405)); //method not allowed

router
  .route("/:id")
  .get(getOneUserAction)
  .all((req, res, next) => next(405)); //method not allowed

export default router;
