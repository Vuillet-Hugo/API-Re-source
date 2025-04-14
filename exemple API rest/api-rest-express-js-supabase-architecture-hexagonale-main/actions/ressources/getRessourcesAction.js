import { readAllRessources } from "../../services/ressourceService.js";

export default async (req, res, next) => {
  try {
    //TODO: inject Repository into Service from Action to reduce Repository / Service couple
    const ressources = await readAllRessources();
    res.json(ressources);
  } catch (err) {
    console.error(err);
    next(500);
  }
};
