"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
router.get("/:id", project_controller_1.ProjectController.getByIdFromDB);
router.post("/", project_controller_1.ProjectController.createProject);
router.get("/", project_controller_1.ProjectController.getAllProjectFromDB);
router.patch("/:id", project_controller_1.ProjectController.updateIdFromDB);
router.delete("/:id", project_controller_1.ProjectController.deleteProjectFromDB);
exports.ProjectRoutes = router;
