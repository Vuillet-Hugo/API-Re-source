import { createRessourceToDataSource } from "../../repositories/SupaBaseressourceRepository.js";

export default async (req, res, next) => {
  try {
    const ressource = req.body;

    if (!ressource) {
      return next(400); // bad request
    }

    const createdRessource = await createRessourceToDataSource(ressource);

    res.status(201).json(createdRessource);
  } catch (error) {
    console.error(error);
    next(500);
  }
};
