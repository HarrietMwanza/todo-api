import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import TasksRouter from "./routes/routes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(TasksRouter);

const port = process.env.PORT || "3001";

app.get("/", (req, res) => {
    res.send("Welcome to TODO API manager");
});

app.listen(port, () => {
    console.log(`TODO API is Running on Port ${port}`);
});
const connectdb = async () => {
    try {
        console.log("Connecting to database");
        await mongoose.connect(process.env.MONGODB, {
            useUnifiedTopology: true,
            socketTimeoutMS: 75000,
        });
        console.log("Successfully connected to database!");
    } catch (error) {
        console.error("Connecting to database failed",error);
        process.exit();
    }

}
connectdb();
export default app;
