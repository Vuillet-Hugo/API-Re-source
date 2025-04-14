import { format } from "path";
import {
  readOneRessourceByIdFromDataSource,
  readAllRessourcesFromDataSource
} from "../repositories/SupaBaseRessourceRepository.js";

const readAllRessources = async () => {
  try {
    const originalRessources = await readAllRessourcesFromDataSource();

    const ressources = originalRessources.map((ressource) => ({
      id: ressource.id,
      nom: ressource.nom,
      format: ressource.format,
      contenue: ressource.contenue,
      description: ressource.description,
      date: ressource.date,
      nbLike: ressource.nbLike,
      nbCom: ressource.nbCom,
      nbReport: ressource.nbReport,
      visible: ressource.visible
    }));

    return ressources;
  } catch (error) {
    console.error(error);
    throw new Error("Can't read ressources");
  }
};

const readOneRessourceById = async (id) => {
  try {
    const originalressource = await readOneRessourceByIdFromDataSource(id);

    const ressource = originalressource.map((ressource) => ({
      id: ressource.id,
      nom: ressource.nom,
      format: ressource.format,
      contenue: ressource.contenue,
      description: ressource.description,
      date: ressource.date,
      nbLike: ressource.nbLike,
      nbCom: ressource.nbCom,
      nbReport: ressource.nbReport,
      visible: ressource.visible
    }));

    return ressource;
  } catch (error) {
    console.error(error);
    throw new Error(`Can't read ressource with id ${id}`);
  }
};

export { readAllRessources, readOneRessourceById };
