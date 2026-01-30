import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    customId: {
      type: String,
      unique: true,
      index: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
    },
  },
  {
    timestamps: true,
  },
);

const Account = mongoose.model("User", accountSchema, "users");

export default Account;
