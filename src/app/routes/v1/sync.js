import express from "express";
import getSync from "../../controllers/v1/sync/getSync.js";
import appMiddleware from "../../middleware/appMiddleware.js";

const router = express.Router();

router.get("/getSync", appMiddleware, getSync);

export default router;
