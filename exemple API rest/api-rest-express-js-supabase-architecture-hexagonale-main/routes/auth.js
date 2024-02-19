import express from "express";
import signInAction from "../actions/auth/signInAction.js";
import signUpAction from "../actions/auth/signUpAction.js";
const router = express.Router();

router
  .route("/signin")
  .post(signInAction)
  .all((req, res, next) => next(405)); //method not allowed

router
  .route("/signup")
  .post(signUpAction)
  .all((req, res, next) => next(405)); //method not allowed

export default router;
