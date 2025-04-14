
import { getCommentaireByRessourceIdFromDataSource } from "../../repositories/SupaBaseCommentaireRepository.js";

export default async (req, res, next) => {
  try {
    const commentaires = await getCommentaireByRessourceIdFromDataSource(req.params.id);
    res.status(200).json(commentaires);
  } catch (error) {
    console.error(error);
    next(500);
  }
};