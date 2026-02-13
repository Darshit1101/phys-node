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
    { accountId: 1, isDefault: 1 },
    { unique: true, partialFilterExpression: { isDefault: true } }
);

// partialFilterExpression ka matlab hai ki ye unique constraint sirf un documents par apply hoga jahan isDefault true hai. Isse ensure hota hai ki ek user ke paas sirf ek hi default address ho sakta hai, lekin wo multiple non-default addresses create kar sakta hai.

const Address = mongoose.model("Address", addressSchema, "addresses");
export default Address;