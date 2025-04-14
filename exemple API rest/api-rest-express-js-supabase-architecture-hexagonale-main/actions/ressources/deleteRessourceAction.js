import { deleteRessourceFromDataSource } from "../../repositories/SupaBaseressourceRepository.js";

export default async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return next(400); // Bad request si pas d'id
    }

    const deletedRessource = await deleteRessourceFromDataSource(id);

    res.status(200).json(deletedRessource);
  } catch (error) {
    console.error(error);
    next(500);
  }
};
