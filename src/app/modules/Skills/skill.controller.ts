import { Request, Response } from "express";
import { SkillServices } from "./skill.services";

const createSkill = async (req: Request, res: Response) => {
    // console.log(req.body)
    const result = await SkillServices.createSkill(req.body);
    res.send(result)
}

  //get all Skill from database
const getAllSkillFromDB = async (req: Request, res: Response) =>{
    const result = await SkillServices.gellAllSkill();  
    res.send(result)
  }
    
  //single Skill from database
  const getByIdFromDB =  async (req: Request, res: Response) =>{
    const {id} = req.params 
    const result = await SkillServices.getByIdFromDB(id);  
     res.send(result)
  }
  
  ///update
const updateIdFromDB = async (req: Request, res: Response) => {
    const {id} = req.params 
    const result = await SkillServices.updateIntoDB(id, req.body);  
    res.send(result)
  }
  
  //Delete Skill from database
  const deleteSkillFromDB = async (req: Request, res: Response) => {
    const {id} = req.params 
    const result = await SkillServices.deleteFromDB(id);  
    res.send(result)
  }
  

export const SkillController = {
   createSkill,
   getAllSkillFromDB,
   getByIdFromDB,
   updateIdFromDB,
   deleteSkillFromDB

}