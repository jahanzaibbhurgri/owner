import { createUser } from 'controllers/userController';
import { Router } from 'express';


const router = Router();

// Define your routes here
router.post('/create', createUser); // Example: POST /users/create

export default router;