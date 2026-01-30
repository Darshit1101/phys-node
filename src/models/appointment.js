import mongoose from "mongoose";
import { appointmentSlot } from "../constants/appointment.js";

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

    slotStart: {
      type: String,
      enum: appointmentSlot,
      required: true,
    },

    slotDuration: {
      type: Number,
      default: 30, // minutes
    },

    problem: {
      type: String,
    },
    customId: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true },
);

// Prevent double booking - same slot at same date can only be booked once
appointmentSchema.index({ appointmentDate: 1, slotStart: 1 }, { unique: true });

const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema,
  "appointments",
);

export default Appointment;
