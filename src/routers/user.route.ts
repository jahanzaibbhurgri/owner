



import { createUser, getAllUsers, getUserById, updateUser,deleteUser} from '../controllers/userController';
import { Router } from 'express';
import {createUserValidationRules,validateUserId} from '../middleware/userValidation';




  const router = Router();
  
router.get('/getallUsers', getAllUsers);
router.post('/createUser',createUserValidationRules,createUser);
router.get('/getUserById/:id',validateUserId ,getUserById);
router.put('/updateUserById/:id',validateUserId,updateUser);
router.delete('/deleteUserById/:id',validateUserId,deleteUser)



export default router;
