import { generateAccessAndRefreshTokens } from "../../services/tokenService.js";
import { verifyCredentials } from "../../services/authenticationService.js";

export default async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({ error: "Authorization header missing" });
    } else {
      const [email, motDePasse] = atob(
        req.headers.authorization.split("Basic")[1]
      ).split(":");

      const user = await verifyCredentials(email, motDePasse);

      const payload = { user };
      const { access_token, refresh_token } =
        await generateAccessAndRefreshTokens(payload);

      res.status(200).json({
        access_token: access_token,
        refresh_token: refresh_token
      });
    }
  } catch (error) {
    console.error(error);

    next(500);
  }
};
