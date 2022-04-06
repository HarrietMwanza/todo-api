import express from "express";
import { viewtask } from "../controllers/tasks.js";
import { viewalllist } from "../controllers/tasks.js";
import { deletetask } from "../controllers/tasks.js";
import { createTask } from "../controllers/tasks.js";
import { updatetasks } from "../controllers/tasks.js";

const TasksRouter = express.Router();

// POST /v1/tasks
// GET /v1/tasks
// DELETE /v1/tasks/{id}
// PUT /v1/tasks/{id}
// GET /v1/tasks

//Create a task /
TasksRouter.post("/v1/tasks", createTask);

//View all task
TasksRouter.get("/v1/tasks", viewalllist);

//View a task
TasksRouter.get("/v1/tasks/:id", viewtask);

//update a task
TasksRouter.put("/v1/tasks/:id", updatetasks);

// delete a task
TasksRouter.delete("/v1/tasks/:id", deletetask);

export default TasksRouter;
