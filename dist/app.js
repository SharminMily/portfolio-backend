"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_roue_1 = require("./app/modules/User/user.roue");
const project_router_1 = require("./app/modules/Projects/project.router");
const skill_router_1 = require("./app/modules/Skills/skill.router");
const blog_router_1 = require("./app/modules/Blogs/blog.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://sharmin-mily.vercel.app"
    ],
    credentials: true,
}));
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send({
        Message: "My portfolio website"
    });
});
app.use('/api/users', user_roue_1.UserRoutes);
app.use('/api/projects', project_router_1.ProjectRoutes);
app.use('/api/skills', skill_router_1.SkillRoutes);
app.use('/api/blogs', blog_router_1.BlogRoutes);
exports.default = app;
