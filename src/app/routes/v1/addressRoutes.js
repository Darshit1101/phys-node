import express from "express";
import createAddress from "../../controllers/v1/address/createAddress.js";
import getAddresses from "../../controllers/v1/address/getAddresses.js";
import getAddress from "../../controllers/v1/address/getAddress.js";
import updateAddress from "../../controllers/v1/address/updateAddress.js";
import deleteAddress from "../../controllers/v1/address/deleteAddress.js";

const router = express.Router();

router.post("/create", createAddress);
router.get("/getAll", getAddresses);
router.get("/get/:id", getAddress);
router.put("/update/:id", updateAddress);
router.delete("/delete/:id", deleteAddress);

export default router;
