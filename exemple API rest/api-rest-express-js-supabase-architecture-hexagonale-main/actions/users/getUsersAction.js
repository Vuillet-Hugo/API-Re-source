import {
  readAllUsers,
  readOneUserById,
  readOneUserByEmail
} from "../../services/userService.js";

export default async (req, res, next) => {
  try {
    if (req.query.email) {
      console.log(req.query.email);
      const users = await readOneUserByEmail(req.query.email);
      res.json(users);
    } else {
      const users = await readAllUsers();
      res.json(users);
    }
  } catch (err) {
    console.error(err);
    next(500);
  }
};
