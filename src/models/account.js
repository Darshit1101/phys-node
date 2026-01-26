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
    default: Role.USER
  }
}, {
  timestamps: true
});

const Account = mongoose.model('Account', accountSchema, 'accounts');

export default Account;