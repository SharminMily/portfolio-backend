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
exports.SkillController = void 0;
const skill_services_1 = require("./skill.services");
const createSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    const result = yield skill_services_1.SkillServices.createSkill(req.body);
    res.send(result);
});
//get all Skill from database
const getAllSkillFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_services_1.SkillServices.gellAllSkill();
    res.send(result);
});
//single Skill from database
const getByIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_services_1.SkillServices.getByIdFromDB(id);
    res.send(result);
});
///update
const updateIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_services_1.SkillServices.updateIntoDB(id, req.body);
    res.send(result);
});
//Delete Skill from database
const deleteSkillFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_services_1.SkillServices.deleteFromDB(id);
    res.send(result);
});
exports.SkillController = {
    createSkill,
    getAllSkillFromDB,
    getByIdFromDB,
    updateIdFromDB,
    deleteSkillFromDB
};
