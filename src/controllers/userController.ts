/*
import { PrismaClient } from '@prisma/client';
import {Router, Request,Response ,NextFunction} from 'express';

const prisma = new PrismaClient();


export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};
*/

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Router } from 'express';


const router = Router();

const prisma = new PrismaClient();





// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).json(user); // 201 Created status for successful creation
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
};



// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving users' });
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  if (isNaN(userId)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving user' });
  }
};

// Update user by ID
export const updateUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  if (isNaN(userId)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: req.body,
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user' });
  }
};

// Delete user by ID
export const deleteUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  if (isNaN(userId)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  try {
    await prisma.user.delete({
      where: { id: userId },
    });
    res.status(204).send(); // 204 No Content status for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting user' });
  }
};



