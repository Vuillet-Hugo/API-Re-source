import { hashPassword } from "../../services/passwordService.js";
import { createUser } from "../../services/userService.js";

export default async (req, res, next) => {
  try {
    const { email, motDePasse, prenom, nom } = req.body;

    if (!email || !motDePasse || !prenom || !nom) {
      next(400);
    }

    const hash = await hashPassword(motDePasse);

    const user = await createUser(email, hash, prenom, nom);

    user.password = "*****";

    res.status(201).json({
      user
    });
  } catch (error) {
    console.error(error);

    if (error === "User already exists") {
      next(500);
    } else {
      next(409);
    }
  }
};
