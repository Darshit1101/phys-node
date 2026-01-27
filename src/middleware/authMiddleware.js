import jwt from "jsonwebtoken";
import { APP_JWT_SECRET } from "../configs/environment.js";

const authMiddleware = (cookieNames = []) => {
  return (req, res, next) => {
    let token = null;
    console.log("cookieNames===>", cookieNames);
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
    console.log("Decoded token:", decoded);
    req.user = decoded;
    next();
  };
};

export default authMiddleware;
