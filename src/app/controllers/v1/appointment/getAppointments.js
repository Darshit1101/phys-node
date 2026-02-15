import Appointment from "../../../../models/appointment.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const getAppointments = async (req, res) => {
    try {
        const patientId = req.user.id; 

        if (!patientId) {
            return sendResponse(res, 400, false, "patientId is required");
        }

        const appointments = await Appointment.find({ patientId }).sort({ appointmentDate: -1 });
        return sendResponse(res, 200, true, "Appointments fetched successfully", appointments);
    } catch (error) {
        logger.error("Error fetching appointments:", error);
        return sendResponse(res, 500, false, error.message);
    }
};

export default getAppointments;
