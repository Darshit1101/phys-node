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
  }
}, {
  timestamps: true
});

const Account = mongoose.model('Admin', accountSchema, 'admin');

export default Account;