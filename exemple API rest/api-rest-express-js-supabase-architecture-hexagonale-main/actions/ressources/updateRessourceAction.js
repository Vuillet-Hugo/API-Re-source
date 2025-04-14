import { updateRessourceInDataSource } from "../../repositories/SupaBaseRessourceRepository.js";

export default async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    if (!id || Object.keys(updatedFields).length === 0) {
      return next(400); // Bad Request si pas d'id ou pas de champs à update
    }

    const updatedRessource = await updateRessourceInDataSource(id, updatedFields);

    if (!updatedRessource) {
      return next(404); // Not Found si rien n'a été modifié
    }

    res.status(200).json(updatedRessource);
  } catch (error) {
    console.error(error);
    next(500);
  }
};
