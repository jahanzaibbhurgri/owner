// Import necessary modules and types

import { createUser } from 'controllers/userController';
import express, { Express, Request, Response } from 'express';
import {Router} from 'express';
import router from './routers/user.route';


// Create an instance of Express
const app: Express = express();
const port: number = 3000;

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Api is running');
});

//use the userRoute for user-related routes
app.use('/user',router);


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


