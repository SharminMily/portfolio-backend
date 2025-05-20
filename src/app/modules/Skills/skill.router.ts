import express from "express";
import { SkillController } from "./skill.controller";


const router = express.Router();

router.get("/:id",SkillController.getByIdFromDB)
router.post("/",SkillController.createSkill)
router.get("/",SkillController.getAllSkillFromDB)
router.patch("/:id",SkillController.updateIdFromDB)
router.delete("/:id",SkillController.deleteSkillFromDB)

export const SkillRoutes = router;