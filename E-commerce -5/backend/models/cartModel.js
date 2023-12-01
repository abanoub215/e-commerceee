import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    details: String,
    phoneImagePath: String,
    price: String,
    user_id: { type: String },
  },
  { timestamps: true } // Make sure timestamps is spelled correctly
);

export default mongoose.model("cart", cartSchema);
