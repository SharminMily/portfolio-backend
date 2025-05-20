import express from "express";
import { ProjectController } from "./project.controller";


const router = express.Router();

router.get("/:id",ProjectController.getByIdFromDB)
router.post("/",ProjectController.createProject)
router.get("/",ProjectController.getAllProjectFromDB)
router.patch("/:id",ProjectController.updateIdFromDB)
router.delete("/:id",ProjectController.deleteProjectFromDB)

export const ProjectRoutes = router;