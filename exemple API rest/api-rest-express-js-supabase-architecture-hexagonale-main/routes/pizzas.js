import express from "express";
import getPizzasAction from "../actions/pizzas/getPizzasAction.js";
import getOnePizzaAction from "../actions/pizzas/getOnePizzaAction.js";

const router = express.Router();

router
  .route("/")
  .get(getPizzasAction) //call getPizzasAction method and transmit req, res, next argument
  .all((req, res, next) => next(405)); //method not allowed

router
  .route("/:id")
  .get(getOnePizzaAction) //call getPizzasAction method and transmit req, res, next argument
  .all((req, res, next) => next(405)); //method not allowed

export default router;
