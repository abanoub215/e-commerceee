// import workoutModel from "../models/workoutModel.js";

// // Get all workouts
// export const getWorkouts = async (req, res) => {
//   const workouts = await workoutModel.find({});
//   res.status(200).json(workouts);
// };

// // Create a new workout
// export const createWorkout = async (req, res) => {
//   try {
//     const newWorkout = await workoutModel.create(req.body);
//     res.status(201).json(newWorkout);
//   } catch (error) {
//     console.error("Error creating workout:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Delete a workout by ID
// export const deleteWorkout = async (req, res) => {
//   const workoutId = req.params.id;

//   try {
//     const deletedWorkout = await workoutModel.findByIdAndDelete(workoutId);

//     if (deletedWorkout) {
//       res.status(200).json({ message: "Workout deleted successfully" });
//     } else {
//       res.status(404).json({ message: "Workout not found" });
//     }
//   } catch (error) {
//     console.error("Error deleting workout:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
