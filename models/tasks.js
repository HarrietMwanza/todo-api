import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
    },
    is_completed: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const Tasks = mongoose.model("tasks", TaskSchema);
