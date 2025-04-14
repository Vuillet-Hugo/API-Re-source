import { readOneRessourceById } from "../../services/ressourceService.js";

export default async (req, res, next) => {
  try {
    const id = req.params.id;

    //TODO: check id is number

    if (!id) {
      next(400);
    } else {
      //TODO: inject Repository into Service from Action to reduce Repository / Service couple

      const ressource = await readOneRessourceById(id);

      if (!ressource) {
        next(404);
      } else {
        res.json(ressource);
      }
    }
  } catch (err) {
    console.error(err);
    next(500);
  }
};
