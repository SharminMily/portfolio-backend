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
exports.BlogController = void 0;
const blog_services_1 = require("./blog.services");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            category: req.body.category,
            readTime: req.body.readTime,
            ratting: req.body.ratting ? Number(req.body.ratting) : 0,
            image: req.body.image || null,
        };
        const result = yield blog_services_1.BlogServices.createBlog(payload);
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: result,
        });
    }
    catch (error) {
        console.error("CREATE BLOG ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create blog",
            error: error instanceof Error ? error.message : error,
        });
    }
});
const getAllBlogFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_services_1.BlogServices.getAllBlog();
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch blogs",
        });
    }
});
const getByIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield blog_services_1.BlogServices.getByIdFromDB(id);
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch blog" });
    }
});
const updateIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield blog_services_1.BlogServices.updateIntoDB(id, req.body);
        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update blog",
        });
    }
});
const deleteBlogFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield blog_services_1.BlogServices.deleteFromDB(id);
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to delete blog" });
    }
});
const reactToBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield blog_services_1.BlogServices.addReaction(id);
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to react to blog" });
    }
});
exports.BlogController = {
    createBlog,
    getAllBlogFromDB,
    getByIdFromDB,
    updateIdFromDB,
    deleteBlogFromDB,
    reactToBlog,
};
