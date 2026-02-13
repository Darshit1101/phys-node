import express from "express";
import upsertProfile from "../../controllers/v1/profile/upsertProfile.js";
import getProfile from "../../controllers/v1/profile/getProfile.js";
import appMiddleware from "../../middleware/appMiddleware.js";

const router = express.Router();

router.post("/save", appMiddleware, upsertProfile);
router.get("/get", appMiddleware, getProfile);

export default router;
