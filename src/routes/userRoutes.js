import express from "express";
import {
  Cgetusers,
  Cgetuser,
  Cpostuser,
  Cdeleteuser,
  Cerroruser,
} from "../controllers/userControllers.js";

const userRoutes = express.Router();

//Routes GET, POST, DELETE
//GET ALL USERS
userRoutes.get("/api/users", Cgetusers);
//GET ONE USER
userRoutes.get("/api/user", Cgetuser);
//POST ONE USER
userRoutes.post("/api/user", Cpostuser);
//DELETE ONE USER
userRoutes.delete("/api/user", Cdeleteuser);

//Error routes
userRoutes.get("*", Cerroruser);

export { userRoutes };
