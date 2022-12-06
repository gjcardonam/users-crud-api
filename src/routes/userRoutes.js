import express from "express";
import {
  Cgetusers,
  Cgetuser,
  Cpostuser,
  Cdeleteuser,
  Cerroruser,
  CuserReg,
  ClogUser,
} from "../controllers/userControllers.js";
import { checkAuth } from "../middleware/Auth.js";

const userRoutes = express.Router();

//USER MANAGEMENT
//GET ALL USERS
userRoutes.get("/users", checkAuth, Cgetusers);
//GET ONE USER
userRoutes.get("/user", Cgetuser);
//POST ONE USER
userRoutes.post("/user", Cpostuser);
//DELETE ONE USER
userRoutes.delete("/user", Cdeleteuser);

//REGISTER
userRoutes.post("/register", CuserReg);

//LOGGIN
userRoutes.post("/login", ClogUser);

//Error routes
userRoutes.get("*", Cerroruser);

export { userRoutes };
