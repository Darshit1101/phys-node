import mongoose from 'mongoose';
import { Role } from '../constants/Role.js';

const accountSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: [Role.ADMIN, Role.USER],
    default: Role.ADMIN
  }
}, {
  timestamps: true
});

const Account = mongoose.model('Admin', accountSchema, 'admin');

export default Account;