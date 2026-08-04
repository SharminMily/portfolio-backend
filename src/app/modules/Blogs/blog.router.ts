import express from "express";
import { BlogController } from "./blog.controller";

const router = express.Router();

router.post("/", BlogController.createBlog);
router.get("/", BlogController.getAllBlogFromDB);
router.get("/:id", BlogController.getByIdFromDB);
router.patch("/:id", BlogController.updateIdFromDB);
router.delete("/:id", BlogController.deleteBlogFromDB);

// ❤️ React to blog
router.post("/:id/react", BlogController.reactToBlog);

export const BlogRoutes = router;