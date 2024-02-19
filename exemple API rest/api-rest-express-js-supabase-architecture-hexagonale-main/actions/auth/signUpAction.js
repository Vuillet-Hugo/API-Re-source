import { hashPassword } from "../../services/passwordService.js";
import { createUser } from "../../services/userService.js";

export default async (req, res, next) => {
  try {
    const { login, password, firstname, lastname } = req.body;

    if (!login || !password || !firstname || !lastname) {
      next(400);
    }

    const hash = await hashPassword(password);

    const user = await createUser(login, hash, firstname, lastname);

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
