import { Request, Response } from "express";
import { BlogServices } from "./blog.services";

const createBlog = async (req: Request, res: Response) => {
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

    const result = await BlogServices.createBlog(payload);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error instanceof Error ? error.message : error,
    });
  }
};

const getAllBlogFromDB = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await BlogServices.getAllBlog();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
    });
  }
};

const getByIdFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BlogServices.getByIdFromDB(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch blog" });
  }
};

const updateIdFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await BlogServices.updateIntoDB(id, req.body);

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update blog",
    });
  }
};

const deleteBlogFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BlogServices.deleteFromDB(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to delete blog" });
  }
};

const reactToBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BlogServices.addReaction(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to react to blog" });
  }
};

export const BlogController = {
  createBlog,
  getAllBlogFromDB,
  getByIdFromDB,
  updateIdFromDB,
  deleteBlogFromDB,
  reactToBlog,
};