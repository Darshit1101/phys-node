import jwt from "jsonwebtoken";
import { APP_JWT_SECRET } from "../configs/environment.js";

const authMiddleware = (cookieNames = []) => {
  return (req, res, next) => {
    let token = null;

    for (const name of cookieNames) {
      if (req.cookies?.[name]) {
        token = req.cookies[name];
        break;
      }
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, APP_JWT_SECRET);
    req.user = decoded;
    next();
  };
};

export default authMiddleware;
