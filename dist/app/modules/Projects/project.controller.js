"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const project_services_1 = require("./project.services");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    const result = yield project_services_1.ProjectServices.createProject(req.body);
    res.send(result);
});
//get all Project from database
const getAllProjectFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_services_1.ProjectServices.gellAllProject();
    res.send(result);
});
//single Project from database
const getByIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_services_1.ProjectServices.getByIdFromDB(id);
    res.send(result);
});
///update
const updateIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_services_1.ProjectServices.updateIntoDB(id, req.body);
    res.send(result);
});
//Delete Project from database
const deleteProjectFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_services_1.ProjectServices.deleteFromDB(id);
    res.send(result);
});
exports.ProjectController = {
    createProject,
    getAllProjectFromDB,
    getByIdFromDB,
    updateIdFromDB,
    deleteProjectFromDB
};
