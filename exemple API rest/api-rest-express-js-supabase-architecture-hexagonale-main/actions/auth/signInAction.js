import { generateAccessAndRefreshTokens } from "../../services/tokenService.js";
import { verifyCredentials } from "../../services/authenticationService.js";

export default async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      next(400);
    } else {
      const [login, password] = atob(
        req.headers.authorization.split("Basic")[1]
      ).split(":");

      const user = await verifyCredentials(login, password);

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
