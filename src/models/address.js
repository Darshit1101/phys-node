import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
    {
        accountId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, },
        line1: { type: String, },
        city: { type: String, },
        state: { type: String, },
        postalCode: { type: String, },
        isDefault: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    });

// Optional: Ek user ka sirf ek hi default address ho
addressSchema.index(
    { user: 1, isDefault: 1 },
    { unique: true, partialFilterExpression: { isDefault: true } }
);

const Address = mongoose.model("Address", addressSchema, "addresses");
export default Address;