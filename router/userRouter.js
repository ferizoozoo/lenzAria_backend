import express from "express";
import { getAllUsers, uploadEye } from "../controller/userController.js";



export const usersRoutes = express.Router();


usersRoutes.get("/getAllUsers" , getAllUsers)
usersRoutes.post("/eye/upload/:userId" , uploadEye)
// userRoutes.get("/:id" , getAllUser)