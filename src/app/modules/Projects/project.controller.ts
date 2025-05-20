import { Request, Response } from "express";
import { ProjectServices } from "./project.services";

const createProject = async (req: Request, res: Response) => {
    // console.log(req.body)
    const result = await ProjectServices.createProject(req.body);
    res.send(result)
}

  //get all Project from database
const getAllProjectFromDB = async (req: Request, res: Response) =>{
    const result = await ProjectServices.gellAllProject();  
    res.send(result)
  }
    
  //single Project from database
  const getByIdFromDB =  async (req: Request, res: Response) =>{
    const {id} = req.params 
    const result = await ProjectServices.getByIdFromDB(id);  
     res.send(result)
  }
  
  ///update
const updateIdFromDB = async (req: Request, res: Response) => {
    const {id} = req.params 
    const result = await ProjectServices.updateIntoDB(id, req.body);  
    res.send(result)
  }
  
  //Delete Project from database
  const deleteProjectFromDB = async (req: Request, res: Response) => {
    const {id} = req.params 
    const result = await ProjectServices.deleteFromDB(id);  
    res.send(result)
  }
  

export const ProjectController = {
   createProject,
   getAllProjectFromDB,
   getByIdFromDB,
   updateIdFromDB,
   deleteProjectFromDB

}