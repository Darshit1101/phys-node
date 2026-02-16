import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import Appointment from "../../../../models/appointment.js";
import PersonalDetails from "../../../../models/personalDetails.js";

const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id)
      .populate("patientId", "-password")
      .populate("addressId")
      .lean();

    if (!appointment) {
      return sendResponse(res, 404, false, "Appointment not found");
    }

    const personalDetails = await PersonalDetails.findOne({ 
      accountId: appointment.patientId._id 
    }).lean();

    const formattedAppointment = {
      ...appointment,
      accountDetails: appointment.patientId,
      address: appointment.addressId,
      patientId: undefined,
      addressId: undefined
    };

    return sendResponse(res, 200, true, "Appointment retrieved successfully", {
      appointment: formattedAppointment,
      personalDetails
    });
  } catch (error) {
    logger.error("Error retrieving appointment:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default getAppointmentById;
