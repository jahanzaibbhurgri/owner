import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const createUser = async (userData: { username: string; email: string }) => {
  try 
  {
    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
      },
    });

    return newUser; // You should include 'id' in the response
    } 
  catch (error) {
    console.error(error);
    throw error;
  }
};

//get all users
export const getAllUsers = async () => {
  return prisma.user.findMany();
};

//get user by id//
export const getUserById = async (userId: number) => {
  return prisma.user.findUnique({
    where: { id: userId },
  });
};

//update user by id//
export const updateUser = async (userId: number, userData: { username: string, email: string }) => {
  return prisma.user.update({
    where: { id: userId },
    data: userData,
  });
};

//deleteuserById//

export const deleteUser = async (userId: number) => {
  return prisma.user.delete({
    where: { id: userId },
  });
};