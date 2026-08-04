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
// =========================
// Create Blog
// =========================
const createBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const blogData = {
        title: data.title,
        image: data.image,
        description: data.description,
        content: data.content,
        category: data.category,
        readTime: data.readTime,
        ratting: (_a = data.ratting) !== null && _a !== void 0 ? _a : 0,
    };
    const result = yield prisma.blog.create({
        data: blogData,
    });
    return result;
});
// =========================
// Get All Blogs
// =========================
const getAllBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blog.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
});
// =========================
// Get Single Blog
// =========================
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blog.findUnique({
        where: {
            id,
        },
    });
    return result;
});
// =========================
// Update Blog
// =========================
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const blogData = {
        title: data.title,
        image: data.image,
        description: data.description,
        content: data.content,
        category: data.category,
        readTime: data.readTime,
        ratting: (_a = data.ratting) !== null && _a !== void 0 ? _a : 0,
    };
    const result = yield prisma.blog.update({
        where: {
            id,
        },
        data: blogData,
    });
    return result;
});
// =========================
// Delete Blog
// =========================
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blog.delete({
        where: {
            id,
        },
    });
    return result;
});
// =========================
// Add Reaction
// =========================
const addReaction = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blog.update({
        where: {
            id,
        },
        data: {
            reactionCount: {
                increment: 1,
            },
        },
        select: {
            id: true,
            reactionCount: true,
        },
    });
    return result;
});
exports.BlogServices = {
    createBlog,
    getAllBlog,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    addReaction,
};
