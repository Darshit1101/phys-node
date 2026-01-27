import jwt from "jsonwebtoken";
import { APP_JWT_SECRET } from "../../configs/environment.js";

const appMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.authToken;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, APP_JWT_SECRET);
    console.log('decoded token===>', decoded);

    req.user = {
      id: decoded.id,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default appMiddleware;
