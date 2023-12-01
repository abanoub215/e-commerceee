import cartModel from "../models/cartModel.js";
import mongoose from "mongoose";
// import authMiddleware from "../middlewares/authMiddleware.js";
// router.get("/", getAllCart);

// // Create a new workout
// router.post("/", addProductToCart);

// // Delete a workout by ID
// router.delete("/:id", deleteProduct);

// Get all workouts
export const getAllCart = async (req, res) => {
  const user_id = req.user._id;
  const cart = await cartModel.find({ user_id });
  res.status(200).json(cart);
};

// Create a new workout
export const addProductToCart = async (req, res) => {
  try {
    const user_id = req.user._id;
    const newProduct = await cartModel.create({ ...req.body, user_id });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a workout by ID
export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    // Convert id to ObjectId
    const objectId = mongoose.Types.ObjectId(id);

    const deleteProduct = await cartModel.findByIdAndDelete(objectId);

    if (deleteProduct) {
      res.status(200).json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
