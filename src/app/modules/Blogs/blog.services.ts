import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient()


const createBlog = async (data: any) => {
//   console.log({ data });

  const BlogData = {
    title: data.title,
    image: data.image,
    description: data.description,
    ratting : data.ratting 
  };

  const result = await prisma.blog.create({
    data: BlogData,
  });

  return result;
};


//get all  from database
const  gellAllBlog = async ()  => {  
    const result = await prisma.blog.findMany() 
    return result;
  };

  //get single from database
const getByIdFromDB = async (id: string)  => {      
    const result = await prisma.blog.findUnique({
        where: {id}
      })
      
    return result;
  };

  //Update from Database
  const updateIntoDB = async (id: string, data: any) => {  
    const result = await prisma.blog.update({
        where: {
         id : id
        },
        data
      })
    return result;
  };


  //delete from database
const deleteFromDB = async (id: string)  => {  
  // console.log({ id });
    const result = await prisma.blog.delete({
        where: {
         id: id
        }
      })
    return result;
  };


export const BlogServices = {
    createBlog,
    gellAllBlog,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB
}