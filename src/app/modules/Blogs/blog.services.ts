import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

// =========================
// Create Blog
// =========================

const createBlog = async (data: any) => {
  const blogData = {
    title: data.title,
    image: data.image,
    description: data.description,
    content: data.content,
    category: data.category,
    readTime: data.readTime,
    ratting: data.ratting ?? 0,
  };

  const result = await prisma.blog.create({
    data: blogData,
  });

  return result;
};

// =========================
// Get All Blogs
// =========================

const getAllBlog = async () => {
  const result = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

// =========================
// Get Single Blog
// =========================

const getByIdFromDB = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  return result;
};

// =========================
// Update Blog
// =========================
const updateIntoDB = async (id: string, data: any) => {
  const blogData = {
    title: data.title,
    image: data.image,
    description: data.description,
    content: data.content,
    category: data.category,
    readTime: data.readTime,
    ratting: data.ratting ?? 0,
  };

  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: blogData,
  });

  return result;
};
// =========================
// Delete Blog
// =========================

const deleteFromDB = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });

  return result;
};

// =========================
// Add Reaction
// =========================

const addReaction = async (id: string) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: {
      reactionCount: {
        increment: 1,
      },
    },
    select: {
      id: true,
      reactionCount: true,
    },
  });

  return result;
};

export const BlogServices = {
  createBlog,
  getAllBlog,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  addReaction,
};