


import { createUser, getAllUsers, getUserById, updateUser } from 'controllers/userController';
import { Router } from 'express';


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of all users.
 *     description: Retrieve a list of all users in the system.
 *     responses:
 *       200:
 *         description: A list of users.
 *       500:
 *         description: An error occurred while fetching users.
 */


function createUserRoute() {
  const userRouter = Router();

  // Define your route handler function

  // Define the route and attach the handler function
  userRouter.get('/users', getAllUsers);

  return userRouter;
}

export default createUserRoute;




