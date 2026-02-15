import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import Appointment from "../../../../models/appointment.js";
import getPagination from "../../../../utils/pagination.js";
import getSearchQuery from "../../../../utils/search.js";

const getAllAppointments = async (req, res) => {
  try {
    const { page, limit, skip } = getPagination(req.query);
    const searchQuery = getSearchQuery(req.query, ["problem", "customId"]);

    const appointments = await Appointment.find(searchQuery)
      .populate("patientId", "-password") //join
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const formattedAppointments = appointments.map(apt => {
      return {
        ...apt,
        patientProfile: apt.patientId,
        patientId: undefined
      };
    });

    const total = await Appointment.countDocuments(searchQuery);

    return sendResponse(res, 200, true, "Appointments retrieved successfully", {
      appointments: formattedAppointments,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    logger.error("Error retrieving appointments:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default getAllAppointments;
