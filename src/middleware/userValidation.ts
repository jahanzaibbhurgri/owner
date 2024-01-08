
import { Request, Response, NextFunction } from 'express';

export const createUserValidationRules = (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
  
    if (!username) {
      return res.status(400).json({ error: 'Please provide the username'});
    }  
    next();
  };
export const logInUserValidationRules = (req: Request,res:Response,next: NextFunction) => {
  const {username,password}= req.body;
  if(!username || !password)
  {
    return res.status(400).json({ error: 'Please provide both username and password' });
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
  
  