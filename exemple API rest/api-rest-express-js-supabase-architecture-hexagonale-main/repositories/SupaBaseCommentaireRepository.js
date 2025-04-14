import "dotenv/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.SUPABASE_URL,
  timeout: 1000,
  headers: { apikey: process.env.SUPABASE_API_KEY }
});

const createCommentaireToDataSource = async (commentaireData) => {
  try {
    const response = await axiosInstance.post("/rest/v1/commentaire", commentaireData);
    return response.data[0];
  } catch (error) {
    console.error(error);
    throw new Error("Can't create commentaire");
  }
};

const getCommentaireByRessourceIdFromDataSource = async (ressourceId) => {
  try {
    const response = await axiosInstance.get(`/rest/v1/commentaire?ressourceID=eq.${ressourceId}`);
    return response.data;
  }
  catch (error) {
    console.error(error);
    throw new Error("Can't get commentaire by ressourceId");
  }
  }

export { createCommentaireToDataSource,
  getCommentaireByRessourceIdFromDataSource
 };
