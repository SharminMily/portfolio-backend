import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient()


const createSkill = async (data: any) => {
//   console.log({ data });

  const SkillData = {
    title: data.title,
    image: data.image,   
  };

  const result = await prisma.skill.create({
    data: SkillData,
  });

  return result;
};


//get all  from database
const  gellAllSkill = async ()  => {  
    const result = await prisma.skill.findMany() 
    return result;
  };

  //get single from database
const getByIdFromDB = async (id: string)  => {      
    const result = await prisma.skill.findUnique({
        where: {id}
      })
      
    return result;
  };

  //Update from Database
  const updateIntoDB = async (id: string, data: any) => {  
    const result = await prisma.skill.update({
        where: {
         id : id
        },
        data
      })
    return result;
  };


  //delete from database
const deleteFromDB = async (id: string)  => {  
    const result = await prisma.skill.delete({
        where: {
         id: id
        }
      })
    return result;
  };


export const SkillServices = {
    createSkill,
    gellAllSkill,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB
}