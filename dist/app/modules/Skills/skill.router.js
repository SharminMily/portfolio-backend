"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.get("/:id", skill_controller_1.SkillController.getByIdFromDB);
router.post("/", skill_controller_1.SkillController.createSkill);
router.get("/", skill_controller_1.SkillController.getAllSkillFromDB);
router.patch("/:id", skill_controller_1.SkillController.updateIdFromDB);
router.delete("/:id", skill_controller_1.SkillController.deleteSkillFromDB);
exports.SkillRoutes = router;
