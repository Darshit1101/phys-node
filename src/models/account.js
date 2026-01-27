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

const Account = mongoose.model('User', accountSchema, 'users');

export default Account;