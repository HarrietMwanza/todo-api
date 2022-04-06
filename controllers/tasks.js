import mongoose from "mongoose";
import { Tasks } from "../models/tasks.js";

// taks functionality
// create a task
export const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ id: task._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {
        message: "Something is wrong...",
      },
    });
  }
};

// get a task

export async function viewtask(req, res) {
  try {
    let task_name = await Tasks.findById(req.params.id);
    if (!task_name) {
      return res.status(404).json({
        success: false,
        data: {
          message: "Task not found",
        },
      });
    }
    res.status(200).json(task_name);
  } catch (err) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "There is something not correct",
    });
  }
}

// get all task/list
export async function viewalllist(req, res) {
  try {
    let task = await Tasks.find();
    if (task) {
      res.status(200).json({
        task: task,
      });
    } else {
      res.json({
        success: true,
        message: "No tasks found.",
      });
    }
  } catch (error) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "There is something not correct",
    });
  }
}

// update a task/edit
export async function updatetasks(req, res) {
  try {
    let task = await Tasks.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        data: {
          message: "Task not found",
        },
      });
    }
    // FIND BY ID AND UPDATE
    const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "There is something not correct",
    });
  }
}

// delete a task
export async function deletetask(req, res) {
  try {
    let task = await Tasks.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        data: {
          message: "Task not found",
        },
      });
    }
    // FIND BY ID AND DELETE
    const deletedTask = await Tasks.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "There is something not correct.",
    });
  }
}
