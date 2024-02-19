import { readAllPizzas } from "../../services/pizzaService.js";

export default async (req, res, next) => {
  try {
    //TODO: inject Repository into Service from Action to reduce Repository / Service couple
    const pizzas = await readAllPizzas();
    res.json(pizzas);
  } catch (err) {
    console.error(err);
    next(500);
  }
};
