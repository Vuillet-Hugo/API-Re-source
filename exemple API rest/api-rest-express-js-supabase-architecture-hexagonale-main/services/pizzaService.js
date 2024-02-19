import {
  readOnePizzaByIdFromDataSource,
  readAllPizzasFromDataSource
} from "../repositories/SupaBasePizzaRepository.js";

//TODO:inject repository from action to service to reduce Service / Repository couple
const readAllPizzas = async () => {
  try {
    const originalPizzas = await readAllPizzasFromDataSource();

    const pizzas = originalPizzas.map((pizza) => ({
      id: pizza.id,
      name: pizza.name,
      ingredients: pizza.ingredients,
      price: pizza.price,
      color: pizza.color
    }));

    return pizzas;
  } catch (error) {
    console.error(error);
    throw new Error("Can't read pizzas");
  }
};

//TODO:inject repository from to service to reduce Service / Repository couple
const readOnePizzaById = async (id) => {
  try {
    const originalPizza = await readOnePizzaByIdFromDataSource(id);

    const pizza = originalPizza.map((pizza) => ({
      id: pizza.id,
      name: pizza.name,
      ingredients: pizza.ingredients,
      price: pizza.price,
      color: pizza.color
    }));

    return pizza;
  } catch (error) {
    console.error(error);
    throw new Error(`Can't read pizza with id ${id}`);
  }
};

export { readAllPizzas, readOnePizzaById };
