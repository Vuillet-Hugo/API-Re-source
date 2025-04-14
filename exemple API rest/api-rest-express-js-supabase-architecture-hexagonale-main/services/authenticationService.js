import { readOneUserByEmail } from "./userService.js";
import bcrypt from "bcrypt";

const verifyCredentials = async (email, motDePasse) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await readOneUserByEmail(email);

      bcrypt.compare(motDePasse, user.motDePasse, (err, result) => {
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
