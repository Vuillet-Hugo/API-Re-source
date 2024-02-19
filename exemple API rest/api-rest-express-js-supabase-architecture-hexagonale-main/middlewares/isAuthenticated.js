const isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    next(401);
  } else {
    const accessToken = req.headers.authorization.split(" ")[1];

    if (accessToken === "abracadabra") {
      res.locals.accessToken = accessToken; //transmet le token au middleware suivant
      next(); //autorisation
    } else {
      next(401);
    }
  }
};

export default isAuthenticated;
