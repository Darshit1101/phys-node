import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const deleteAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id);
        if (!address) {
            return sendResponse(res, 404, false, "Address not found");
        }
        return sendResponse(res, 200, true, "Address deleted successfully");
    } catch (error) {
        logger.error("Error deleting address:", error);
        return sendResponse(res, 500, false, error.message);
    }
};

export default deleteAddress;
