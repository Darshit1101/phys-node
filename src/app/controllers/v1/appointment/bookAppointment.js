import Appointment from "../../../../models/appointment.js";

const bookAppointment = async (req, res) => {
  try {
    const { appointmentDate, slotTime, problem } = req.body;

    const appointment = await Appointment.create({
      patientId: req.user.id,
      appointmentDate: new Date(appointmentDate),
      slotTime,
      problem,
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
    });
  } catch (error) {
    // Duplicate booking error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This slot is already booked. Please choose another time.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export default bookAppointment;
