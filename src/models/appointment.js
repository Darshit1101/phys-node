import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    slotTime: {
      type: String, // "10:00-10:30"
      required: true,
    },

    problem: {
      type: String,
    },
  },
  { timestamps: true },
);

// Prevent double booking
appointmentSchema.index({ appointmentDate: 1, slotTime: 1 }, { unique: true });

const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema,
  "appointments",
);

export default Appointment;
