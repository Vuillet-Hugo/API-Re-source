import "dotenv/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.SUPABASE_URL,
  timeout: 1000,
  headers: { apikey: process.env.SUPABASE_API_KEY }
});

const readAllPizzasFromDataSource = async () => {
  try {
    const response = await axiosInstance.get("/pizzas");
    const originalPizzas = response.data;
    return originalPizzas;
  } catch (error) {
    console.error(error);
    throw new Error("Can't read pizzas");
  }
};

const readOnePizzaByIdFromDataSource = async (id) => {
  try {
    const response = await axiosInstance.get(`/pizzas?id=eq.${id}`);
    const originalPizza = response.data;
    return originalPizza;
  } catch (error) {
    console.error(error);
    throw new Error(`Can't read pizza with id ${id}`);
  }
};

export { readAllPizzasFromDataSource, readOnePizzaByIdFromDataSource };
