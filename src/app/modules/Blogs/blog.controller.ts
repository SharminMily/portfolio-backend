import { Request, Response } from "express";
import { BlogServices } from "./blog.services";



const createBlog = async (req: Request, res: Response) => {
    // console.Blog(req.body)
    const result = await BlogServices.createBlog(req.body);
    res.send(result)
}

  //get all Blog from database
const getAllBlogFromDB = async (req: Request, res: Response) =>{
    const result = await BlogServices.gellAllBlog();  
    res.send(result)
  }
    
  //single Blog from database
  const getByIdFromDB =  async (req: Request, res: Response) =>{
    const {id} = req.params 
    const result = await BlogServices.getByIdFromDB(id);  
     res.send(result)
  }
  
  ///update
const updateIdFromDB = async (req: Request, res: Response) => {
    const {id} = req.params 
    const result = await BlogServices.updateIntoDB(id, req.body);  
    res.send(result)
  }
  
  //Delete Blog from database
  const deleteBlogFromDB = async (req: Request, res: Response) => {
    const {id} = req.params 
    const result = await BlogServices.deleteFromDB(id);  
    res.send(result)
  }
  

export const BlogController = {
   createBlog,
   getAllBlogFromDB,
   getByIdFromDB,
   updateIdFromDB,
   deleteBlogFromDB

}