import { requireSignIn } from "../middlewares/authMiddleware.js";
import express from "express";
import {
  addProductToCart,
  getAllCart,
  deleteProduct,
} from "../controllers/cartController.js";

const router = express.Router();

router.use(requireSignIn);
// Get all workouts
router.get("/", getAllCart);

// Create a new workout
router.post("/", addProductToCart);

// Delete a workout by ID
router.delete("/:id", deleteProduct);

export default router;
