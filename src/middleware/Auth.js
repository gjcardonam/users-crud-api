import { verifyToken } from "../helpers/Htokensign.js";

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = verifyToken(token);
    if (tokenData) {
      next();
    } else {
      res.status(409).send({ message: "Bad token" });
    }
  } catch (error) {
    console.log(error);
  }
};

export { checkAuth };
