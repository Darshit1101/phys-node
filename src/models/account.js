import mongoose from 'mongoose';

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
    enum: ['admin', 'user'],
    default: 'user'
  }
}, {
  timestamps: true
});

const Account = mongoose.model('Account', accountSchema, 'accounts');

export default Account;