import Appointment from "../../../../models/appointment.js";
import { appointmentSlot } from "../../../../constants/appointment.js";
import {customIdPrefix} from "../../../../constants/customIdPrefix.js";

const bookAppointment = async (req, res) => {
  try {
    const { appointmentDate, slotStart, problem, slotDuration } = req.body;

    if (!appointmentDate || !slotStart) {
      return res.status(400).json({
        success: false,
        message: "appointmentDate and slotStart required",
      });
    }

    if (!appointmentSlot.includes(slotStart)) {
      return res.status(400).json({
        success: false,
        message: "Invalid slot selected",
      });
    }

    // const date = new Date(`${appointmentDate}T00:00:00.000Z`);

    const appointment = await Appointment.create({
      patientId: req.user.id,
      appointmentDate: new Date(appointmentDate),
      slotStart,
      problem,
      slotDuration,
      customId: customIdPrefix.APPOINTMENT,
    });

    return res.status(201).json({
      success: true,
      data: appointment,
    });

  } catch (error) {
    console.error("BOOKING ERROR 👉", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This slot is already booked",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default bookAppointment;
