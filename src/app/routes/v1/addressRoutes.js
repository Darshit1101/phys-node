import express from "express";
import createAddress from "../../controllers/v1/address/createAddress.js";
import getAddresses from "../../controllers/v1/address/getAddresses.js";
import getAddress from "../../controllers/v1/address/getAddress.js";
import updateAddress from "../../controllers/v1/address/updateAddress.js";
import deleteAddress from "../../controllers/v1/address/deleteAddress.js";
import setDefaultAddress from "../../controllers/v1/address/setDefaultAddress.js";
import appMiddleware from "../../middleware/appMiddleware.js";

const router = express.Router();

router.post("/create", appMiddleware, createAddress);
router.get("/getAll", appMiddleware, getAddresses);
router.get("/get/:id", appMiddleware, getAddress);
router.put("/update/:id", appMiddleware, updateAddress);
router.patch("/setDefault/:id", appMiddleware, setDefaultAddress);
router.delete("/delete/:id", appMiddleware, deleteAddress);

export default router;
