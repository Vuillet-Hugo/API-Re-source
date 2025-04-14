import { createCommentaireToDataSource } from "../../repositories/SupaBaseCommentaireRepository.js";

export default async (req, res, next) => {
  try {
    const commentaire = req.body;
    const createdCommentaire = await createCommentaireToDataSource(commentaire);

    res.status(201).json(createdCommentaire);
  } catch (error) {
    console.error(error);
    next(500);
  }
};