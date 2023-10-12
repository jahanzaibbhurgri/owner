import { body } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const createUserValidationRules = (req: Request, res: Response, next: NextFunction) => {
    const { username, email } = req.body;
  
    if (!username || !email) {
      return res.status(400).json({ error: 'Please provide both username and email' });
    }  
    // Proceed to the next middleware or the route handler
    next();
  };


  export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(req.params.id, 10);
  
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ error: 'Invalid userId' });
    }
    // Proceed to the next middleware or the route handler
    next();
  };
  
  