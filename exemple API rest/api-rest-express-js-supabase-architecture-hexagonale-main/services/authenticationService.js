import { readOneUserByEmail } from "./userService.js";
import bcrypt from "bcrypt";

const verifyCredentials = async (login, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await readOneUserByEmail(login);

      bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
          reject("Bad credentials");
        } else {
          resolve(user);
        }
      });
    } catch (error) {
      reject();
    }
  });
};

export { verifyCredentials };
