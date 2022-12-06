import express from "express";
import { userRoutes } from "./routes/userRoutes.js";

// Creating App
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api", userRoutes);

export default app;
