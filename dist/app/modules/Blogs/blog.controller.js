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
    // console.Blog(req.body)
    const result = yield blog_services_1.BlogServices.createBlog(req.body);
    res.send(result);
});
//get all Blog from database
const getAllBlogFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_services_1.BlogServices.gellAllBlog();
    res.send(result);
});
//single Blog from database
const getByIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_services_1.BlogServices.getByIdFromDB(id);
    res.send(result);
});
///update
const updateIdFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_services_1.BlogServices.updateIntoDB(id, req.body);
    res.send(result);
});
//Delete Blog from database
const deleteBlogFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_services_1.BlogServices.deleteFromDB(id);
    res.send(result);
});
exports.BlogController = {
    createBlog,
    getAllBlogFromDB,
    getByIdFromDB,
    updateIdFromDB,
    deleteBlogFromDB
};
