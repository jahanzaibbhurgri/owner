import { Request, Response } from 'express';
import * as userService from '../service/userService'




export const registerUser = async (req: Request, res: Response) => {
  try {
    const registrationUser = await userService.registerUser(req.body);

    res.status(201).json(registrationUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const loginUser = await userService.logIn(req.body);
    res.status(200).json(loginUser);
  } catch (error) {
    console.error('Incorrect login of user', error);
    res.status(401).json({ error: 'Incorrect Credentials' });
  }
};


