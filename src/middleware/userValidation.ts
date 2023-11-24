
import { Request, Response, NextFunction } from 'express';

export const createUserValidationRules = (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ error: 'Please provide both username and email' });
    }  
    next();
  };
export const logInUserValidationRules = (req: Request,res:Response,next: NextFunction) => {
  const {email,password}= req.body;
  if(!email || !password)
  {
    return res.status(400).json({ error: 'Please provide both email and password' });
  }
  next();

}
export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(req.params.id, 10);
  
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ error: 'Invalid userId' });
    }
    // Proceed to the next middleware or the route handler
    next();
  };
  
  