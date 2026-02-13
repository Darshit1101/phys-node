import mongoose from 'mongoose';

const personalDetailsSchema = new mongoose.Schema({
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: { type: Number },
    gender: { type: String, enum: ['MALE', 'FEMALE', 'OTHER'] },
    phone: { type: String },
}, {
    timestamps: true
});

const PersonalDetails = mongoose.model('PersonalDetails', personalDetailsSchema, 'personalDetails');
export default PersonalDetails;