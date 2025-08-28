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
exports.SkillServices = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createSkill = (data) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log({ data });
    const SkillData = {
        title: data.title,
        image: data.image,
    };
    const result = yield prisma.skill.create({
        data: SkillData,
    });
    return result;
});
//get all  from database
const gellAllSkill = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.skill.findMany();
    return result;
});
//get single from database
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.skill.findUnique({
        where: { id }
    });
    return result;
});
//Update from Database
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.skill.update({
        where: {
            id: id
        },
        data
    });
    return result;
});
//delete from database
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.skill.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.SkillServices = {
    createSkill,
    gellAllSkill,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB
};
