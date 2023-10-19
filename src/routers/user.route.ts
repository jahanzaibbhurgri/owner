import { Router } from 'express';
import {createUserValidationRules,logInUserValidationRules} from '../middleware/userValidation';
import { loginUser, registerUser } from '../controllers/userController';




const router = Router();
  
router.post('/api/register/user',createUserValidationRules,registerUser);
router.post('/api/login/user',logInUserValidationRules ,loginUser);


export default router;
