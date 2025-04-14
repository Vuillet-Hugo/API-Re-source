import "dotenv/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.SUPABASE_URL,
  timeout: 1000,
  headers: { apikey: process.env.SUPABASE_API_KEY }
});

const readAllRessourcesFromDataSource = async () => {
  try {
    const response = await axiosInstance.get("/rest/v1/ressource");
    const originalRessources = response.data;
    return originalRessources;
  } catch (error) {
    if (error.response) {
      console.error('Erreur Axios:', error.response.status, error.response.data);
    } else {
      console.error('Erreur Axios:', error.message);
    }
    throw new Error("Can't read ressources");
  
  }
};

const readOneRessourceByIdFromDataSource = async (id) => {
  try {
    const response = await axiosInstance.get(`/rest/v1/ressource?id=eq.${id}`);
    const originalRessource = response.data;
    return originalRessource;
  } catch (error) {
    console.error(error);
    throw new Error(`Can't read ressource with id ${id}`);
  }
};

const createRessourceToDataSource = async (ressource) => {
  try {
    const response = await axiosInstance.post("/rest/v1/ressource", ressource, {
      headers: {
        Prefer: "return=representation" 
      }
    });

    const createdRessource = response.data[0];

    if (!createdRessource) {
      throw new Error("Can't create ressource");
    }

    return createdRessource;
  } catch (error) {
    console.error(error);
    throw new Error("Can't create ressource");
  }
};

const deleteRessourceFromDataSource = async (id) => {
  try {
    const response = await axiosInstance.delete(`/rest/v1/ressource?id=eq.${id}`, {
      headers: {
        Prefer: "return=representation"
      }
    });

    const deletedRessource = response.data[0];

    if (!deletedRessource) {
      throw new Error(`Can't delete ressource with id ${id}`);
    }

    return deletedRessource;
  } catch (error) {
    console.error(error);
    throw new Error(`Can't delete ressource with id ${id}`);
  }
};
const updateRessourceInDataSource = async (id, updatedFields) => {
  try {
    const response = await axiosInstance.patch(
      `/rest/v1/ressource?id=eq.${id}`,
      updatedFields,
      {
        headers: {
          Prefer: "return=representation"
        }
      }
    );

    const updatedRessource = response.data[0];

    if (!updatedRessource) {
      throw new Error(`Can't update ressource with id ${id}`);
    }

    return updatedRessource;
  } catch (error) {
    console.error(error);
    throw new Error(`Can't update ressource with id ${id}`);
  }
};

export {
  readAllRessourcesFromDataSource,
  readOneRessourceByIdFromDataSource,
  createRessourceToDataSource,
  deleteRessourceFromDataSource,
  updateRessourceInDataSource
};
