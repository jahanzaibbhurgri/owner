



import { createUser, getAllUsers, getUserById, updateUser,deleteUser} from '../controllers/userController';
import { Router } from 'express';


  const router = Router();
  
router.get('/getallUsers', getAllUsers);
router.post('/createUser',createUser);
router.get('/getUserById/:id', getUserById);
router.put('/updateUserById/:id',updateUser);
router.delete('/deleteUserById/:id',deleteUser)



export default router;
