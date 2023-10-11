import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const createUser = async (userData: { username: string; email: string }) => {
  try {
    // Validate input data
    if (!userData || typeof userData.username !== 'string' || typeof userData.email !== 'string') {
      throw new Error('I');
    }

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getUserById = async (userId: number) => {
  return prisma.user.findUnique({
    where: { id: userId },
  });
};

export const updateUser = async (userId: number, userData: { username: string, email: string }) => {
  return prisma.user.update({
    where: { id: userId },
    data: userData,
  });
};

export const deleteUser = async (userId: number) => {
  return prisma.user.delete({
    where: { id: userId },
  });
};