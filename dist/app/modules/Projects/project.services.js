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
exports.ProjectServices = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createProject = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log({ data });
    const projectData = {
        title: data.title,
        image: data.image,
        description: data.description,
        liveLink: data.liveLink,
        frontendCode: data.frontendCode,
        backendCode: data.backendCode,
    };
    const result = yield prisma.project.create({
        data: projectData,
    });
    return result;
});
//get all  from database
const gellAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.project.findMany();
    return result;
});
//get single from database
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.project.findUnique({
        where: { id }
    });
    return result;
});
//Update from Database
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.project.update({
        where: {
            id: id
        },
        data
    });
    return result;
});
//delete from database
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.project.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.ProjectServices = {
    createProject,
    gellAllProject,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB
};
