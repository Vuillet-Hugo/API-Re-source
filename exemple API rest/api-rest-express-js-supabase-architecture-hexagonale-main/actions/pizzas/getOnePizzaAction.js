import { readOnePizzaById } from "../../services/pizzaService.js";

export default async (req, res, next) => {
  try {
    const id = req.params.id;

    //TODO: check id is number

    if (!id) {
      next(400);
    } else {
      //TODO: inject Repository into Service from Action to reduce Repository / Service couple

      const pizza = await readOnePizzaById(id);

      if (!pizza) {
        next(404);
      } else {
        res.json(pizza);
      }
    }
  } catch (err) {
    console.error(err);
    next(500);
  }
};
