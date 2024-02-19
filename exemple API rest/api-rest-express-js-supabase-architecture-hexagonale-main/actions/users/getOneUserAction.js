import { readOneUserById } from "../../services/userService.js";

export default async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await readOneUserById(id);
    res.json(user);
  } catch (err) {
    console.error(err);
    next(500);
  }
};
