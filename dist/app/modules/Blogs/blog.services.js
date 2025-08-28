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
exports.BlogServices = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log({ data });
    const BlogData = {
        title: data.title,
        image: data.image,
        description: data.description,
        ratting: data.ratting
    };
    const result = yield prisma.blog.create({
        data: BlogData,
    });
    return result;
});
//get all  from database
const gellAllBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blog.findMany();
    return result;
});
//get single from database
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blog.findUnique({
        where: { id }
    });
    return result;
});
//Update from Database
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blog.update({
        where: {
            id: id
        },
        data
    });
    return result;
});
//delete from database
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log({ id });
    const result = yield prisma.blog.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.BlogServices = {
    createBlog,
    gellAllBlog,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB
};
