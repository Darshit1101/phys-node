import jwt from "jsonwebtoken";
import { APP_JWT_SECRET } from "../../configs/environment.js";
import { Cookie } from "../../constants/Cookies.js";

const appMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.[Cookie.AUTH_TOKEN];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", logout: true });
    }

    const decoded = jwt.verify(token, APP_JWT_SECRET);

    req.user = {
      id: decoded.id,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token", logout: true });
  }
};

export default appMiddleware;