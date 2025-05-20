import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient()


const createProject = async (data: any) => {
//   console.log({ data });

  const projectData = {
    title: data.title,
    image: data.image,
    description: data.description,
    liveLink: data.liveLink,
    frontendCode: data.frontendCode,
    backendCode: data.backendCode,
  };

  const result = await prisma.project.create({
    data: projectData,
  });

  return result;
};


//get all  from database
const  gellAllProject = async ()  => {  
    const result = await prisma.project.findMany() 
    return result;
  };

  //get single from database
const getByIdFromDB = async (id: string)  => {      
    const result = await prisma.project.findUnique({
        where: {id}
      })
      
    return result;
  };

  //Update from Database
  const updateIntoDB = async (id: string, data: any) => {  
    const result = await prisma.project.update({
        where: {
         id : id
        },
        data
      })
    return result;
  };


  //delete from database
const deleteFromDB = async (id: string)  => {  
    const result = await prisma.project.delete({
        where: {
         id: id
        }
      })
    return result;
  };


export const ProjectServices = {
    createProject,
    gellAllProject,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB
}