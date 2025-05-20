import express from "express";
import { BlogController } from "./blog.controller";


const router = express.Router();

router.get("/:id",BlogController.getByIdFromDB)
router.post("/",BlogController.createBlog)
router.get("/",BlogController.getAllBlogFromDB)
router.patch("/:id",BlogController.updateIdFromDB)
router.delete("/:id",BlogController.deleteBlogFromDB)

export const BlogRoutes = router;