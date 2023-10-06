// src/controllers/userController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response) => {
  try {
    const user = await prisma.product.create({ data: req.body });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};
