//import { Request, Response, NextFunction } from 'express';
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



