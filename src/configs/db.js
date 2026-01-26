import mongoose from "mongoose";
import { APP_DB_URI } from "./environment.js";

const connectDB = async () => {
  await mongoose.connect(APP_DB_URI);
  console.log("==MongoDB connected==");
};

export default connectDB;
